import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import projectSkillconnect from "@/assets/project-skillconnect.jpeg";
import projectCosmic from "@/assets/project-cosmic.jpeg";
import projectHeartsight from "@/assets/project-heartsight.jpeg";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  highlight?: string;
  featured?: boolean;
  image: string;
};

const projects: Project[] = [
  {
    title: "SkillConnect",
    subtitle: "Solo Full-Stack Project",
    description:
      "A comprehensive Career Guidance & Skill Development Platform that connects learners with curated learning paths, assessments, and personalized career recommendations.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "REST APIs", "Vite", "Auth"],
    github: "https://github.com/Rushikesh743-maker/SkillConnect",
    live: "https://skillconnect-gules.vercel.app/",
    image: projectSkillconnect,
  },
  {
    title: "HeartSight",
    subtitle: "Solo Full-Stack Project",
    description:
      "A Heart Monitoring Web Application providing real-time heart rate tracking, health analytics, and personalized insights for proactive health management.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "REST APIs", "Auth"],
    github: "https://github.com/Rushikesh743-maker/heart-sight-app",
    live: "https://heart-sight-app.vercel.app/",
    image: projectHeartsight,
  },
  {
    title: "Cosmic Explorer",
    subtitle: "Solo 3D Interactive Project",
    description:
      "An immersive 3D space exploration web application featuring interactive planetary visuals, orbital simulations, and rich educational content about the cosmos.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Three.js", "Supabase", "PostgreSQL", "REST APIs"],
    github: "https://github.com/Rushikesh743-maker/Cosmic-Explorer",
    live: "https://cosmic-explorer-flax.vercel.app/",
    image: projectCosmic,
    highlight: "Three.js 3D Rendering",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">03. Projects</p>
          <h2 className="section-heading">Things I've Built</h2>
          <div className="w-16 h-1 rounded-full neon-line mb-12" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="project-card"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Preview area */}
                <div className="md:col-span-2 bg-secondary/50 flex items-center justify-center relative overflow-hidden min-h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {project.highlight && (
                    <span className="relative z-10 inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-primary/30 text-primary">
                      <Sparkles size={12} />
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-primary text-xs mb-1">{project.subtitle}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-secondary text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2 px-4"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
