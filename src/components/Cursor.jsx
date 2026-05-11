export default function Cursor({ color }) {
  return (
    <div 
      className="custom-cursor"
      style={{ 
        left: 'var(--cursor-x)', 
        top: 'var(--cursor-y)',
        background: color
      }}
    />
  );
}
