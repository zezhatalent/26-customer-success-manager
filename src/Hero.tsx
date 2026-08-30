import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView } from './hooks/useMotion';
import { useEffect, useRef } from 'react';

function SmileFace({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  const { theme } = useTheme();
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.6, 0.3, 0.6], scale: [0, 1, 0.9, 1], y: [0, -15, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke={`${theme.accent}40`} strokeWidth="3" />
      <circle cx="35" cy="40" r="5" fill={`${theme.accent}60`} />
      <circle cx="65" cy="40" r="5" fill={`${theme.accent}60`} />
      <path d="M30 60 Q50 80 70 60" fill="none" stroke={`${theme.accent}60`} strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

function Heart({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  const { theme } = useTheme();
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.5, 0.2, 0.5], scale: [0, 1.1, 0.95, 1.1], y: [0, -12, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M50 88 C25 65 5 50 5 30 C5 15 18 5 32 5 C40 5 48 10 50 15 C52 10 60 5 68 5 C82 5 95 15 95 30 C95 50 75 65 50 88Z"
        fill={`${theme.accent2}30`}
        stroke={`${theme.accent2}50`}
        strokeWidth="2"
      />
    </motion.svg>
  );
}

function CurveCard({ title, value, path, color, sub }: { title: string; value: string; path: string; color: string; sub: string }) {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div ref={ref} className="rounded-2xl border p-5" style={{ borderColor: theme.border, background: theme.surface, boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: theme.muted }}>{title}</span>
        <motion.span
          className="font-mono text-xl font-bold"
          style={{ color }}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          {value}
        </motion.span>
      </div>
      <svg viewBox="0 0 200 80" className="mt-3 w-full">
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
      <span className="text-xs" style={{ color: theme.muted }}>{sub}</span>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(700px circle at 75% 30%, ${theme.accent}12, transparent)` }}
      />

      <SmileFace x={8} y={15} size={60} delay={0} />
      <SmileFace x={85} y={20} size={45} delay={1.2} />
      <Heart x={90} y={60} size={50} delay={0.8} />
      <Heart x={5} y={70} size={35} delay={2} />
      <SmileFace x={70} y={80} size={40} delay={1.5} />
      <Heart x={40} y={10} size={30} delay={2.5} />

      <motion.svg
        className="absolute top-10 right-10 opacity-10"
        width="120"
        height="120"
        viewBox="0 0 100 100"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M30 50 Q50 70 70 50"
          fill="none"
          stroke={theme.accent}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Customer Success
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}60` }}
              whileTap={{ scale: 0.95 }}
            >
              See my programs
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}30` }}
              whileTap={{ scale: 0.95 }}
            >
              Partner with me
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CurveCard title="Churn" value="-45%" sub="logo churn reduced" color={theme.accent2} path="M10,16 C50,24 90,60 190,66" />
          <CurveCard title="NRR" value="122%" sub="net retention revenue" color={theme.accent} path="M10,66 C50,60 120,30 190,14" />
        </motion.div>
      </div>
    </section>
  );
}
