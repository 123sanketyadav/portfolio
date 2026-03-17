import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  { text: "Solved multiple LeetCode problems, strengthening data structures and algorithms skills.", date: "December 2025" },
  { text: "Achieved 3rd rank in the WEBKA Hackathon for outstanding project performance.", date: "March 2024" },
];

const AchievementsSection = () => (
  <section className="py-[12vh]">
    <div className="section-divider mb-[12vh]" />
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <p className="section-label">Achievements</p>
</motion.div>

      <div className="mt-10 space-y-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface flex items-center gap-5"
          >
            <div className="w-10 h-10 shrink-0 border border-primary/20 bg-primary/5 flex items-center justify-center">
              <Trophy size={16} className="text-primary" />
            </div>
            <p className="text-foreground/80 flex-1">{a.text}</p>
            <span className="font-mono text-xs text-primary/60 shrink-0 metric-value">{a.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
