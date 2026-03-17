import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-[#020617]"
    >
      {/* Background dots */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* Hello */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-sm mb-3"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Sanket Yadav
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 mt-3"
        >
          Cloud Computing Enthusiast | Aspiring Cloud Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-400 text-sm leading-relaxed"
        >
          Passionate about building scalable cloud infrastructure and modern web 
          experiences with AWS, Azure, and DevOps technologies.
          <br /><br />
          BTech CSE student at Lovely Professional University, constantly learning and 
          exploring the cloud ecosystem.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400">
          <a href="https://github.com/123sanketyadav" target="_blank">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sanket-yadav10/" target="_blank">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-white text-black rounded-md flex items-center gap-2"
          >
            <Download size={16} /> Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/40 rounded-md flex items-center gap-2"
          >
            <Mail size={16} /> Contact Me
          </a>
        </div>

        {/* 🔥 ANIMATED CIRCLE */}
        <div className="flex justify-center mt-12">

          <div className="relative w-[220px] h-[220px] flex items-center justify-center">

            {/* Outer rotating ring */}
            <div className="absolute w-full h-full rounded-full border border-white/10 animate-spin-slow"></div>

            {/* Second ring */}
            <div className="absolute w-[180px] h-[180px] rounded-full border border-white/20"></div>

            {/* Glow circle */}
            <div className="absolute w-[140px] h-[140px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

            {/* Center empty */}
            <div className="w-[100px] h-[100px] rounded-full bg-[#020617] border border-white/10"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;