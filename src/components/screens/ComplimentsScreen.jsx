"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";

const compliments = [
  "Nii oru thaai kelavi..👩‍🦳",
  "Paaka tha soft aana nii oru bajari..🤪",
  "mm, mmok, seri ok, bye, mm seri...😂",
  "Madharasi rukmani..🥰",
  "VIP 2 kajol...🤣",
  "last one nalatha soluvenu nenachiya...maate..🤣",
];

function Card({ text, isOpen, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      layout
      className="cursor-pointer relative px-4 py-3 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden"
    >
      {/* Title */}
      <p className="text-sm md:text-base text-white/80">
    😁
      </p>

      {/* Expandable text */}
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-sm md:text-base"
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function ComplimentsScreen({ onNext }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-8">

        {/* Heart */}
        <motion.div
          className="w-28 h-28 rounded-full bg-linear-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/30 flex items-center justify-center backdrop-blur-md"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Heart className="w-14 h-14 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Just for you
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 w-full px-4">
          {compliments.map((line, index) => (
            <Card
              key={index}
              text={line}
              isOpen={openIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={onNext}
          className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>See more paati</span>
          <MoveRight size={20} />
        </motion.button>

      </div>
    </motion.div>
  );
}
