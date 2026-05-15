# Globlyn — About Page Components (Professional Copy)

---

## AboutHero.tsx

```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export function AboutHero() {
  return (
    <section className="py-36 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <motion.h1
          variants={fadeUp}
          className="font-[--font-bricolage] font-bold text-white"
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
          }}
        >
          Engineering Digital Excellence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-[--font-geist] text-[17px] text-[var(--text-body)] leading-[1.75] max-w-2xl mx-auto"
        >
          Globlyn is a web development and AI automation agency dedicated to building
          high-performance digital products. We work directly with founders and
          decision-makers to deliver measurable outcomes — on time, without compromise.
        </motion.p>
      </motion.div>
    </section>
  );
}
```

---

## WhoWeAre.tsx

```tsx
'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { fadeUp, stagger, scrollReveal } from '@/lib/motion';

export function WhoWeAre() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-subtle)]">
      <motion.div
        {...scrollReveal}
        variants={stagger}
        className="max-w-3xl mx-auto space-y-8"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>Who We Are</SectionLabel>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="space-y-5 font-[--font-geist] text-[17px] text-[var(--text-body)] leading-[1.75]"
        >
          <p>
            Globlyn was founded by a team of engineers and technologists who share a single
            conviction: that quality engineering is the most reliable path to business growth.
          </p>
          <p>
            We specialize in two disciplines — precision web development and intelligent process
            automation. Every engagement is handled by our core team. We do not outsource,
            subcontract, or delegate client work to third parties.
          </p>
          <p>
            Our approach is straightforward. We understand your objectives, define clear
            deliverables, and execute with technical rigor. The result is a digital product
            that performs — not just on launch day, but long after.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

---

## WhatWeDeliver.tsx

```tsx
'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';
import { fadeUp, stagger, scrollReveal } from '@/lib/motion';

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'We design and develop custom websites and web applications built for speed, search visibility, and conversion. Every project is engineered from the ground up — optimized for Core Web Vitals, structured for SEO, and built to scale with your business.',
  },
  {
    title: 'AI Automation',
    description:
      'We design and deploy intelligent automation workflows that eliminate repetitive operational tasks. From CRM synchronization and lead management to document processing and support automation — our systems run continuously, reducing overhead and improving operational efficiency.',
  },
];

export function WhatWeDeliver() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-subtle)]">
      <motion.div
        {...scrollReveal}
        variants={stagger}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>Our Services</SectionLabel>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <GlassCard glow className="h-full p-8 space-y-4">
                <h3
                  className="font-[--font-bricolage] font-semibold text-[var(--violet-bright)]"
                  style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                <p className="font-[--font-geist] text-[15px] text-[var(--text-body)] leading-[1.7]">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
```

---

## WhyChooseUs.tsx

```tsx
'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { fadeUp, stagger, scrollReveal } from '@/lib/motion';

const REASONS = [
  {
    title: 'Direct Engagement',
    description:
      'Every project is managed and executed by our core engineering team. Clients have direct access to the people building their product throughout the engagement — not through intermediaries or account management layers.',
  },
  {
    title: 'Delivery-Focused',
    description:
      'We operate on defined timelines with clear milestones. Our standard delivery window is 14 days from project kickoff. Scope, timeline, and cost are agreed upon upfront — no surprises, no scope creep.',
  },
  {
    title: 'Outcome Accountability',
    description:
      'We define success through your business objectives, not internal metrics. Projects are scoped around measurable KPIs, and we remain accountable to those targets from kickoff through delivery.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-subtle)]">
      <motion.div
        {...scrollReveal}
        variants={stagger}
        className="max-w-3xl mx-auto space-y-12"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>Why Globlyn</SectionLabel>
        </motion.div>

        <motion.div variants={stagger} className="space-y-10">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={
                idx !== REASONS.length - 1
                  ? 'pb-10 border-b border-[var(--border-subtle)]'
                  : ''
              }
            >
              <h3
                className="font-[--font-bricolage] font-semibold text-white mb-3"
                style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
              >
                {reason.title}
              </h3>
              <p className="font-[--font-geist] text-[16px] text-[var(--text-body)] leading-[1.7]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
```

---

## TeamSection.tsx

```tsx
'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { fadeUp, stagger, scrollReveal } from '@/lib/motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// ─── FILL IN YOUR REAL DETAILS HERE ──────────────────────────────────────────
const TEAM: TeamMember[] = [
  {
    name: '[Full Name]',
    role: 'Co-founder & Full-Stack Engineer',
    bio: '[Full Name] brings [X] years of experience in full-stack web development, with a focus on performance engineering and scalable front-end architecture. At Globlyn, [he/she/they] leads all web development engagements — from technical scoping through to deployment and post-launch support.',
  },
  {
    name: '[Full Name]',
    role: 'Co-founder & AI Automation Specialist',
    bio: '[Full Name] has [X] years of experience designing and deploying intelligent automation systems across fintech, retail, and SaaS environments. At Globlyn, [he/she/they] leads all automation engagements — from workflow architecture through to integration, testing, and handover.',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export function TeamSection() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border-subtle)]">
      <motion.div
        {...scrollReveal}
        variants={stagger}
        className="max-w-3xl mx-auto space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-3">
          <SectionLabel>The Team</SectionLabel>
          <p className="font-[--font-geist] text-[16px] text-[var(--text-muted)] leading-[1.6]">
            A focused team of engineers and automation specialists committed to
            delivering work that meets a high technical standard.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="space-y-12">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={
                idx !== TEAM.length - 1
                  ? 'pb-12 border-b border-[var(--border-subtle)]'
                  : ''
              }
            >
              <div className="space-y-1 mb-4">
                <p className="font-[--font-geist-mono] text-[11px] text-[var(--text-accent)] tracking-[0.08em] uppercase">
                  {member.role}
                </p>
                <h3
                  className="font-[--font-bricolage] font-bold text-white"
                  style={{ fontSize: '24px', letterSpacing: '-0.02em' }}
                >
                  {member.name}
                </h3>
              </div>
              <p className="font-[--font-geist] text-[16px] text-[var(--text-body)] leading-[1.7]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
```
