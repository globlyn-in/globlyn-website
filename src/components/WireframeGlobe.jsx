import { useEffect, useRef } from 'react';

export default function WireframeGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let cx, cy;
    
    const radius = 400; // Base radius of the globe
    const pointCount = 600; // Number of nodes
    const maxConnectionDistance = 85; // Distance to draw wireframe lines
    const rotationSpeedX = 0.001;
    const rotationSpeedY = 0.002;
    
    let points = [];
    let angleX = 0;
    let angleY = 0;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Position off-center to the right
      cx = width * 0.8;
      cy = height * 0.5;
    };

    window.addEventListener('resize', resize);
    resize();

    // Generate random points on a sphere (Fibonacci lattice for even distribution)
    const generatePoints = () => {
      points = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
      for (let i = 0; i < pointCount; i++) {
        const y = 1 - (i / (pointCount - 1)) * 2; // y goes from 1 to -1
        const r = Math.sqrt(1 - y * y); // radius at y
        const theta = phi * i; // golden angle increment

        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;

        points.push({ 
          baseX: x, baseY: y, baseZ: z,
          x, y, z,
          // Random offset for morphing phase
          phase: Math.random() * Math.PI * 2 
        });
      }
    };

    generatePoints();

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += rotationSpeedX;
      angleY += rotationSpeedY;
      time += 0.01;

      // Pre-calculate rotation sines and cosines
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedPoints = [];

      // Transform and project points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Morphing: breathing effect on radius
        const morphOffset = 1 + Math.sin(time * 2 + p.phase) * 0.05;
        let x1 = p.baseX * radius * morphOffset;
        let y1 = p.baseY * radius * morphOffset;
        let z1 = p.baseZ * radius * morphOffset;

        // Rotate around X axis
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate around Y axis
        let x3 = x1 * cosY + z2 * sinY;
        let z3 = -x1 * sinY + z2 * cosY;

        // Perspective projection
        const focalLength = 1000;
        const perspective = focalLength / (focalLength + z3);
        
        const px = cx + x3 * perspective;
        const py = cy + y2 * perspective;

        projectedPoints.push({
          x: px,
          y: py,
          z: z3,
          perspective
        });
      }

      // Draw wireframe connections
      ctx.lineWidth = 1;
      
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        
        // Don't draw points that are too far behind (culling for better 3D effect)
        if (p1.z < -200) continue;

        // Optional: Draw nodes
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 * p1.perspective})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.5 * p1.perspective, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          if (p2.z < -200) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            // Calculate opacity based on distance and depth
            const dist = Math.sqrt(distSq);
            const opacity = (1 - (dist / maxConnectionDistance)) * 0.15 * p1.perspective;
            
            // Add a hint of brand orange to some lines for aesthetic
            if (i % 15 === 0) {
              ctx.strokeStyle = `rgba(248, 69, 37, ${opacity * 2})`; // var(--brand)
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
}
