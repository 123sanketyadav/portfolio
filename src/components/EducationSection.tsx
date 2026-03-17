import { motion } from "framer-motion";

const education = [
  { period: "Apr 2023 – Present", title: "Bachelor of Technology - CSE", place: "Lovely Professional University, Phagwara, Punjab", metric: "CGPA: 6.89", active: true },
  { period: "Apr 2022 – Mar 2023", title: "Intermediate (PCM)", place: "Jai Narayan Vidya Mandir Inter College, Kanpur, Uttar Pradesh ", metric: "Percentage: 76%", active: false },
  { period: "Apr 2020 – Mar 2021", title: "Matriculation", place: "Tulip Public School, Etah, Uttar Pradesh", metric: "Percentage: 78%", active: false },
];

const EducationSection = () => (
  <section id="education" className="py-[12vh]">
    <div className="section-divider mb-[12vh]" />
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <p className="section-label">Education</p>
  <h2 className="section-title">Academic Timeline</h2>
</motion.div>

      <div className="mt-10 relative">
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-foreground/10 to-transparent" />
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pl-12 md:pl-16 relative"
            >
              <div className={`absolute left-3 md:left-4 top-8 w-3 h-3 border-2 ${edu.active ? 'border-primary bg-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.5)]' : 'border-foreground/20 bg-background'} transition-all`} />
              <div className={`card-surface ${edu.active ? 'glow-border border-primary/30' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <p className="font-mono text-xs text-primary metric-value">{edu.period}</p>
                  {edu.active && <span className="font-mono text-[9px] bg-primary/10 text-primary px-2 py-0.5 uppercase tracking-wider">Current</span>}
                </div>
                <h3 className="font-semibold text-lg">{edu.title}</h3>
                <p className="text-sm text-foreground/50 mt-1">{edu.place}</p>
                <p className="font-mono text-sm text-primary/80 mt-3 metric-value">{edu.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
