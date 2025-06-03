
import { motion } from "framer-motion";
import Header from "@/components/whitepaper/Header";
import Introduction from "@/components/whitepaper/Introduction";
import ProblemStatement from "@/components/whitepaper/ProblemStatement";
import Solution from "@/components/whitepaper/Solution";
import TokenUtility from "@/components/whitepaper/TokenUtility";
import Roadmap from "@/components/whitepaper/Roadmap";
import Vision from "@/components/whitepaper/Vision";
import Benefits from "@/components/whitepaper/Benefits";
import Footer from "@/components/whitepaper/Footer";
import FloatingNav from "@/components/whitepaper/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <FloatingNav />
      <div className="relative">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-0"
        >
          <Introduction />
          <ProblemStatement />
          <Solution />
          <TokenUtility />
          <Roadmap />
          <Vision />
          <Benefits />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
