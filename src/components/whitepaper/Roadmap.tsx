
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, CheckCircle, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roadmapData = [
    {
      quarter: "Q2 2025",
      title: "The Genesis",
      status: "completed",
      color: "from-green-500 to-emerald-500",
      items: [
        { text: "Project conception and planning (May 2025)", completed: true },
        { text: "Design and development of the BaseBloomer website", completed: true },
        { text: "$BLOOM token creation and initial tokenomics", completed: true },
        { text: "Website + referral dashboard launch", completed: true },
        { text: "BaseBloomer social pages and community rollout", completed: true },
        { text: "First BaseBloomer Community Space", completed: true }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Growth & Expansion",
      status: "current",
      color: "from-blue-500 to-purple-500",
      items: [
        { text: "Launch of staking dashboard for $BLOOM holders", completed: false },
        { text: "Staking APY logic implemented with flexible models", completed: false },
        { text: "On-chain reward claiming (earn more $BLOOM through activity)", completed: false },
        { text: "Leaderboard and referral ranking system", completed: false },
        { text: "Task-based XP & gamified missions", completed: false },
        { text: "Meme & content creation contests to boost cultural relevance", completed: false },
        { text: "Expand collaborations with other Base-native projects", completed: false },
        { text: "Launch of NFT rewards and redemptions tied to $BLOOM", completed: false }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Community Scaling",
      status: "upcoming",
      color: "from-purple-500 to-pink-500",
      items: [
        { text: "Mobile-optimized dashboard UI/UX upgrade", completed: false },
        { text: "Launch of community-built micro-campaigns", completed: false },
        { text: "$BLOOMER utility store (redeem for NFTs, whitelists, more)", completed: false },
        { text: "Begin DAO/Community voting on platform upgrades", completed: false },
        { text: "Security & smart contract audit for staking platform", completed: false },
        { text: "Expand BaseBloomer presence across onchain social platforms", completed: false }
      ]
    },
    {
      quarter: "2026 & Beyond",
      title: "Base Culture Powerhouse",
      status: "future",
      color: "from-yellow-500 to-orange-500",
      items: [
        { text: "Build out BaseBloomer as a full cultural layer for the Base ecosystem", completed: false },
        { text: "Fully decentralized campaign creation and reward pool system", completed: false },
        { text: "Analytics dashboard for campaign and staking performance", completed: false },
        { text: "Cross-collaboration with top builders and creators on Base", completed: false },
        { text: "Host annual 'Bloom Awards' to recognize top cultural contributors", completed: false }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      case "current":
        return <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>;
      case "upcoming":
        return <Badge className="bg-purple-500 hover:bg-purple-600">Upcoming</Badge>;
      case "future":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Future</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roadmap
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className={`bg-gradient-to-r ${phase.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold">
                        {phase.quarter}
                      </CardTitle>
                      <p className="text-lg text-white/90 mt-2">{phase.title}</p>
                    </div>
                    {getStatusBadge(phase.status)}
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {item.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={`text-sm ${item.completed ? 'text-gray-700' : 'text-gray-600'}`}>
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
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

export default Roadmap;
