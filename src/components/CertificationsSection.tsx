import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Internet of Things",
    issuer: "NPTEL",
    date: "Apr 2024",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera",
    date: "May 2024",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys",
    date: "Aug 2025",
  },
  
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "Aug 2025",
  },
  {
    title: "Full-Stack Development Using MERN Stack",
    issuer: "Apna College",
    date: "Dec 2025",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-[12vh] bg-[#020617]">
    <div className="section-divider mb-[12vh]" />

    <div className="max-w-6xl mx-auto px-6">

      {/* Heading Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-primary text-sm tracking-widest">CERTIFICATIONS</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Credentials Earned
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#0f172a] rounded-xl border border-white/10 p-6 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 relative overflow-hidden"
          >

            {/* Left Glow Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/70 group-hover:bg-primary transition-all"></div>

            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="w-10 h-10 shrink-0 bg-primary/10 flex items-center justify-center rounded-md">
                <Award size={18} className="text-primary" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-xs text-primary mt-2">
                  {cert.date}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default CertificationsSection;