import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
          <h2 className="section-heading">Who I Am</h2>
          <div className="w-16 h-1 rounded-full neon-line mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a passionate <span className="text-foreground font-medium">Computer Engineering student</span> with strong expertise in frontend development and scalable web application architecture. I specialize in building high-performance, user-centric web platforms using modern technologies.
            </p>
            <p>
              I have developed impactful solo projects like <span className="text-primary font-medium">SkillConnect</span> (Career Guidance & Skill Development Platform), <span className="text-primary font-medium">HeartSight</span> (Heart Monitoring Web Application), and <span className="text-primary font-medium">Cosmic Explorer</span> (3D Interactive Space Exploration Platform).
            </p>
            <p>
              I enjoy solving complex problems using Java and continuously strengthening my <span className="text-foreground font-medium">Data Structures & Algorithms</span> foundation. I actively participate in hackathons, lead teams, and design intuitive UI/UX experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="w-48 h-48 rounded-xl bg-secondary flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                <img src={profilePhoto} alt="Rushikesh A. Narke" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 rounded-xl border-2 border-primary/20 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
