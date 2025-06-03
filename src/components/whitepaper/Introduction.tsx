
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, TrendingUp } from "lucide-react";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="introduction" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Introduction
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Heart, title: "Community First", color: "text-red-500" },
            { icon: Users, title: "Creator Empowerment", color: "text-blue-500" },
            { icon: TrendingUp, title: "Real Growth", color: "text-green-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            <strong className="text-2xl text-blue-600">BaseBloomer</strong> is more than a token it's the 
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold"> heartbeat of culture on Base</span>. 
            We're building a community-first movement that empowers creators, marketers, devs, and memers to co-create value, 
            earn through participation, and shape the Base narrative from the ground up.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 font-medium">
              we are a marketing and empowerment platform enabling 
              <span className="text-blue-600"> real growth</span>, 
              <span className="text-purple-600"> real tools</span>, and 
              <span className="text-pink-600"> real impact</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
