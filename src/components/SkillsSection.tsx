import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", items: ["Java", "C++", "JavaScript"] },
  { title: "Frameworks / Concepts", items: ["HTML", "CSS", "Tailwind CSS", "React.js"] },
  { title: "Tools / Platforms", items: ["MySQL", "MongoDB", "Git", "GitHub", "Docker", "Kubernetes", "AWS"] },
  { title: "Core Competencies", items: ["OOPs", "DSA", "Problem Solving"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-[12vh] relative">
    
    <div className="section-divider mb-[12vh]" />

    <div className="max-w-6xl mx-auto px-6">

      {/* ✅ CENTER HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="section-label">SKILLS</p>
     <h2 className="text-2xl md:text-3xl font-semibold">
  What I Work With
</h2>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-surface group"
          >

            {/* ❌ NUMBER REMOVED */}

            <p className="font-mono text-xs text-primary uppercase tracking-wider mb-5">
              {cat.title}
            </p>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="mono-tag">
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default SkillsSection;