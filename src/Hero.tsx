import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView } from './hooks/useMotion';

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
  return (
    <section id="hero" className="relative flex min-h-screen items-center" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(700px circle at 75% 30%, ${theme.accent}12, transparent)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Customer Success
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
            >
              See my programs
            </a>
            <a
              href="#contact"
              className="rounded-full border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Partner with me
            </a>
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <CurveCard title="Churn" value="-45%" sub="logo churn reduced" color={theme.accent2} path="M10,16 C50,24 90,60 190,66" />
          <CurveCard title="NRR" value="122%" sub="net retention revenue" color={theme.accent} path="M10,66 C50,60 120,30 190,14" />
        </div>
      </div>
    </section>
  );
}
