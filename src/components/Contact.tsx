

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-background/50 to-muted/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Let's Collaborate
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your project? Drop me a message or connect directly via:
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:Engg.akashsingh@gmail.com">
              <Button variant="outline" className="gap-2 hover:bg-primary/10">
                <Mail className="h-4 w-4" />
                Email Now
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/itsmeakashsingh/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 hover:bg-secondary/10">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 relative p-8 rounded-xl bg-background border border-border/50 shadow-lg"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Direct Communication</h3>
              <p className="text-muted-foreground leading-relaxed">
                For project inquiries or collaboration opportunities, reach out through:
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:Engg.akashsingh@gmail.com"
                className="flex items-center text-lg text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-4" />
                Engg.akashsingh@gmail.com
              </motion.a>

              <div className="flex gap-6">
                <motion.a
                  href="https://github.com/akashsingh3030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/itsmeakashsingh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/akashsingh3030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.img
                  src="/lovable-uploads/cce4e176-e8ea-4011-9cb9-0bbe07578606.png"
                  alt="Akash Singh"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
