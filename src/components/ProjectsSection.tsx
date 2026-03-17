import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AIMate – AI Assistant",
    desc: "Real-time AI chatbot using React, Node.js, MongoDB & OpenAI API.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
    github: "https://github.com/123sanketyadav/clone-backend",
    live: "https://clone-backend-15.onrender.com/",
    image: "/project1.jpg",
  },
  {
    title: "To-Do List Manager",
    desc: "Task manager with Local Storage and full CRUD operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/123sanketyadav/task-manager",
    live: "https://admirable-salmiakki-41ecb6.netlify.app/",
    image: "/project2.jpg",
  },
  {
    title: "Edu Cloud Platform",
    desc: "AWS-based scalable system using EC2, S3, RDS & Auto Scaling.",
    tech: ["AWS", "EC2", "S3", "RDS"],
    github: "https://github.com/123sanketyadav/aws2",
    live: "https://github.com/123sanketyadav/aws2",
    image: "/project3.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-[12vh] bg-[#020617]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-primary text-sm tracking-widest">PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt="project"
                className="w-full h-44 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>

                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-white hover:text-primary transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;