
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coins, Trophy, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TokenUtility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const utilities = [
    {
      icon: Trophy,
      title: "Participate in Campaigns",
      description: "Earn $BLOOM through creative and social tasks, contests, and community challenges",
      color: "from-yellow-500 to-orange-500",
      badge: "Active"
    },
    {
      icon: Coins,
      title: "Stake to Earn",
      description: "Lock tokens and earn more over time with flexible staking models",
      color: "from-blue-500 to-purple-500",
      badge: "Q3 2025"
    },
    {
      icon: Users,
      title: "Support New Projects",
      description: "Our treasury and marketing arms back early Base builders and innovators",
      color: "from-green-500 to-emerald-500",
      badge: "Ongoing"
    },
    {
      icon: Calendar,
      title: "Access Exclusive Events",
      description: "Community-only spaces, collaborations, and growth campaigns",
      color: "from-purple-500 to-pink-500",
      badge: "Premium"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-purple-50" id="token" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Coins className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Token Utility
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-purple-600 mx-auto mb-8" />
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            What Can You Do With $BLOOM?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${utility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${utility.color} flex items-center justify-center shadow-lg`}>
                        <utility.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {utility.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{utility.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{utility.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🌸 $BLOOM Token Economy
          </h3>
          <p className="text-lg md:text-xl text-yellow-100 leading-relaxed">
            A utility-driven token that powers community participation, rewards creativity, 
            and fuels the Base ecosystem's cultural growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenUtility;
