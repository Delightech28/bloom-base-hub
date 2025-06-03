
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Twitter, MessageCircle, Github, Globe, Sparkles } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Join the Movement
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Community Empowering creators & communities on @base
          </h3>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Onboarding the next 100k.<br />
            Real tools. Real impact. $BLOOM 🌱
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: Twitter, label: "Twitter" },
            { icon: MessageCircle, label: "Discord" },
            { icon: Github, label: "GitHub" },
            { icon: Globe, label: "Website" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center border-t border-white/20 pt-8"
        >
          <p className="text-blue-200 mb-4">
            © 2025 BaseBloomer. Building the future of Base culture.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Worth $1M+ in Community Value</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
