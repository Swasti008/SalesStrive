import React from "react";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaChartLine,
  FaGift,
  FaUserCheck,
  FaChartPie,
  FaBullhorn,
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      title: "Track Sales",
      description:
        "Monitor your sales performance in real-time with detailed analytics and reports.",
      icon: <FaChartLine />,
    },
    {
      title: "Manage Rewards",
      description:
        "Easily manage and distribute rewards to your affiliates, ensuring everyone gets their fair share.",
      icon: <FaGift />,
    },
    {
      title: "Affiliate Management",
      description:
        "Keep track of your affiliates and their performance, and manage their details effortlessly.",
      icon: <FaUserCheck />,
    },
    {
      title: "Performance Insights",
      description:
        "Gain valuable insights into your marketing campaigns with comprehensive performance metrics.",
      icon: <FaChartPie />,
    },
    {
      title: "Automated Campaigns",
      description:
        "Set up and automate marketing campaigns to save time and maximize efficiency.",
      icon: <FaBullhorn />,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex flex-col items-center justify-center px-8 mt-44 mb-10 xl:mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        About Sales Strive
      </h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="max-w-xs p-4 shadow-lg"
          >
            <Card className="text-center bg-[#00234D] h-60">
              <CardHeader className="flex flex-col items-center">
                <div className="text-4xl mb-4 text-white">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
