import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Machine Learning with Python", issuer: "IBM SkillsBuild" },
  { title: "Web Development", issuer: "CodeSignal" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud" },
  { title: "Java", issuer: "L&T Education" },
  { title: "Python", issuer: "HackerRank" },
  { title: "JavaScript", issuer: "HackerRank" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">05. Certifications</p>
          <h2 className="section-heading">Credentials</h2>
          <div className="w-16 h-1 rounded-full neon-line mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="cert-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
