import { motion } from "framer-motion";
import { Trophy, Users, Code, Palette } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Hack4Access 2025", subtitle: "Finalist" },
  { icon: Trophy, title: "LaserHacks 2025", subtitle: "Finalist" },
  { icon: Trophy, title: "E-Tech Hacks 2025", subtitle: "Finalist" },
  { icon: Trophy, title: "7+ Hackathons", subtitle: "Participated" },
];

const roles = [
  { icon: Code, label: "Frontend Developer" },
  { icon: Users, label: "Team Lead" },
  { icon: Palette, label: "UI/UX Designer" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04. Achievements</p>
          <h2 className="section-heading">Recognition & Roles</h2>
          <div className="w-16 h-1 rounded-full neon-line mb-12" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="achievement-card"
            >
              <a.icon className="mx-auto mb-3 text-primary" size={28} />
              <h4 className="font-semibold text-foreground text-sm mb-1">{a.title}</h4>
              <p className="text-muted-foreground text-xs">{a.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {roles.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-primary/20 text-sm font-medium text-foreground bg-primary/5"
            >
              <r.icon size={16} className="text-primary" />
              {r.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
