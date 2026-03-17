import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "shivayadav886981@gmail.com",
    href: "mailto:shivayadav886981@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/123sanktyadav",
    href: "https://linkedin.com/in/123sanktyadav",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/123sankityadav",
    href: "https://github.com/123sankityadav",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91-8869844145",
    href: "tel:+918869844145",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-[12vh] relative">

    <div className="section-divider mb-[12vh]" />
    <div className="absolute inset-0 gradient-radial opacity-40" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* 🔥 CENTER HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="section-label">Contact</p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-4">
          I'm always open to new opportunities, collaborations, and conversations.
          Feel free to reach out!
        </p>
      </motion.div>

      {/* 🔥 CENTER CARDS */}
      <div className="mt-10 space-y-4 max-w-2xl mx-auto">

        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface flex items-center gap-4 group cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >

            {/* ICON */}
            <div className="w-11 h-11 flex items-center justify-center border border-primary/20 bg-primary/5 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
              <c.icon size={18} className="text-primary" />
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">
                {c.label}
              </p>

              <p className="text-sm text-foreground/80 group-hover:text-white transition">
                {c.value}
              </p>
            </div>

            {/* ARROW */}
            <ArrowUpRight
              size={16}
              className="text-foreground/0 group-hover:text-primary transition-all duration-300"
            />

          </motion.a>
        ))}

      </div>

    </div>
  </section>
);

export default ContactSection;