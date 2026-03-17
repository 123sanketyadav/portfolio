import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const TrainingSection = () => (
  <section id="training" className="py-[12vh]">
    <div className="section-divider mb-[12vh]" />
    <div className="max-w-6xl mx-auto px-6">
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="text-center"
>
  <p className="section-label">Training</p>
  <h2 className="section-title"></h2>
</motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="card-surface mt-10 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/40" />
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 shrink-0 border border-primary/20 bg-primary/5 flex items-center justify-center">
            <BookOpen size={16} className="text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">DSA Using C++ | LPU</h3>
              <span className="font-mono text-xs text-primary/60 metric-value">Aug 2025</span>
            </div>
          </div>
        </div>
        <ul className="space-y-2 text-foreground/60 text-sm ml-14">
          <li>• Engineered fundamental and advanced data structures (Arrays, Linked Lists, Trees, Graphs) from scratch in C++.</li>
          <li>• Applied algorithmic paradigms (Sorting, Searching, Dynamic Programming) to optimize solution efficiency.</li>
          <li>• Utilized OOP principles and STL to write robust, reusable, high-performance code.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default TrainingSection;
