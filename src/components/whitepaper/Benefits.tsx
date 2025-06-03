
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, TrendingUp, Users, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Earn by Participating",
      description: "Turn your creativity and engagement into real rewards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Stake for Passive Rewards",
      description: "Lock your tokens and watch them grow over time",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Gift,
      title: "Early Access to Base Projects",
      description: "Get first access to the hottest new projects on Base",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Users,
      title: "Grow Your Network",
      description: "Build connections and expand your community influence",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Heart,
      title: "Have Fun Building Legacy",
      description: "Enjoy the journey while creating lasting impact",
      color: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50" id="benefits" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Benefits for Users
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-6xl mb-6"
            >
              🌸
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              BaseBloomer is here for builders, dreamers, and doers.
            </h3>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Whether you're dropping memes or code, you belong.
            </p>
            
            <div className="text-2xl md:text-3xl font-bold">
              Let's bloom together<span className="text-green-300">for Base, by Base.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
