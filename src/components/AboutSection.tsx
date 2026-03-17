import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-[12vh] relative">

      {/* Divider */}
      <div className="section-divider mb-[12vh]" />

      {/* Background Glow */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label">ABOUT ME</p>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 space-y-6 text-center max-w-3xl mx-auto text-gray-400 leading-relaxed"
        >
          <p>
            I'm Sanket Yadav, a BTech Computer Science & Engineering student at Lovely Professional University (Batch 2023–2027) with a strong passion for Cloud Computing. I am deeply interested in designing, deploying, and managing cloud-based solutions, and I am committed to continuously strengthening my knowledge in this domain.
          </p>

          <p>
            Currently, I am actively learning and working with Microsoft Azure and AWS to build strong expertise in cloud technologies. My goal is to become a certified Cloud Solutions Architect and help organizations leverage cloud computing to create scalable, secure, and efficient systems.
          </p>
        </motion.div>

        {/* Single Card (Education Only) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 w-full max-w-md hover:border-primary/40 transition-all">

            {/* Icon */}
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-white" size={22} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold">BTech CSE</h3>
            <p className="text-sm text-gray-400 mt-1">
              Lovely Professional University (2023–2027)
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;