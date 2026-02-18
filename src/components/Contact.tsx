import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">06. Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-16 h-1 rounded-full neon-line mx-auto mb-8" />
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 md:p-10 space-y-6 text-left mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a href="mailto:Rushikesh.narke@nmiet.edu.in" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                Rushikesh.narke@nmiet.edu.in
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <a href="tel:8080966825" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                8080966825
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-foreground font-medium text-sm">Pune, Maharashtra, India</p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/Rushikesh743-maker"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rushikesh-narke-2404bb32a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:Rushikesh.narke@nmiet.edu.in"
            className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
