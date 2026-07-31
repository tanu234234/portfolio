import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { socialLinks } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./CustomIcons";
import MagneticButton from "./MagneticButton";

const contacts = [
  { label: "Email", value: "tanushree9663@gmail.com", href: socialLinks.email, icon: Mail },
  { label: "LinkedIn", value: "tanushree-k-a", href: socialLinks.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "tanu234234", href: socialLinks.github, icon: GithubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(176,141,87,0.06),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-6">Contact</p>
          <h2 className="text-4xl lg:text-7xl font-bold font-space-grotesk tracking-tight text-[#2D2926] leading-[1.05]">
            Let's Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#C7A97B]">Meaningful</span> Together.
          </h2>
          <p className="mt-8 text-lg text-[#6B645C] max-w-xl mx-auto">
            Have a question, an idea, or an opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <MagneticButton
            href={socialLinks.email}
            className="px-10 py-4 bg-[#8A6A44] text-white rounded-full text-sm font-semibold shadow-[0_8px_30px_rgba(138,106,68,0.28)] hover:bg-[#7A5B39] hover:shadow-[0_12px_45px_rgba(138,106,68,0.38)] hover:scale-[1.03] transition-all duration-500 cursor-pointer flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight size={16} />
          </MagneticButton>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_8px_25px_rgba(176,141,87,0.05)] hover:shadow-[0_15px_40px_rgba(176,141,87,0.1)] hover:border-[#B08D57]/15 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-[#B08D57]/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#B08D57] transition-colors duration-500">
                  <Icon size={18} className="text-[#B08D57] group-hover:text-white transition-colors duration-500" />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B645C] mb-1">{contact.label}</p>
                <p className="text-sm font-medium text-[#2D2926] truncate">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
