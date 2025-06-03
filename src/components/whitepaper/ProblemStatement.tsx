
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, Coins, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Network,
      title: "Fragmented Communities",
      description: "Base communities lack a core identity and unified space for collaboration",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Coins,
      title: "No Reward System",
      description: "Culture creators and participants aren't rewarded for their valuable contributions",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Missing Economic Layer",
      description: "Community-driven content lacks proper monetization and value capture mechanisms",
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50" id="problem" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Problem Statement
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-medium">
            While Base has the <span className="text-blue-600 font-bold">infrastructure</span>, 
            it lacks a <span className="text-purple-600 font-bold">cultural and community hub</span> that 
            unites builders and audiences in one space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <problem.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
