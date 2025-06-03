
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Lightbulb, Star, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Star,
      title: "Culture Hub Creation",
      description: "Building the ultimate space where energy, creativity, and ambition thrive on Base",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Reward System",
      description: "Earning $BLOOM for participation: threads, memes, content, and community tasks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Project Exposure",
      description: "Providing visibility for new Base projects through campaigns and strategic partnerships",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Gamified Growth",
      description: "Offering staking, referrals, and gamified mechanics for sustainable community growth",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-green-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Solution
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            BaseBloomer is solving these problems by:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{solution.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Marketing & Promotion Platform
          </h3>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Serving as the premier marketing and promotion platform for Base-native projects, 
            connecting innovators with engaged communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
