"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const message = `
I just wanted to tell you something....Paati😂.  

hey thozhi namaloda friendship bond enaikum break aaga kudathu...
enatha namma friend aagi 1 month aanalum, inimelum nama bond thodaranum...
Intha year rendu perukum best year ah irukanum thozhi...
nii enaku bestfriend aavenu na kanavula kuda nenachu paathathu illa...
na evlo story sonalum mm mm nu solitu kepa...
sonna solite polam paati...
Nala nanbargala erupom till last...
Always got your back 👍
`;

export default function MessageScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setCurrentText(message.slice(0, index + 1));
        index++;

        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      } else {
        clearInterval(timer);
        setIsTypingDone(true);
      }
    }, 12); // typing speed

    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <motion.div className="flex flex-col items-center justify-center p-4 text-center">

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A little note for you Thozhi
      </motion.h2>

      {/* Message Card */}
      <motion.div
        onClick={() => !isOpen && setIsOpen(true)}
        className="max-w-md w-full cursor-pointer text-center relative p-5 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden mb-8"
        whileHover={!isOpen ? { scale: 1.01 } : {}}
      >
        {!isOpen && (
          <p className="text-sm text-white/70">
            Tap to read ❤️
          </p>
        )}

        {isOpen && (
          <p
            ref={scrollRef}
            className="text-sm md:text-base whitespace-pre-line max-h-64 overflow-y-auto"
          >
            {currentText}
          </p>
        )}
      </motion.div>

      {/* Next button (only after typing ends) */}
      {isTypingDone && (
        <motion.button
          onClick={onNext}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 text-lg rounded-full font-medium shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Apro last one</span>
          <MoveRight size={18} className="fill-current" />
        </motion.button>
      )}

    </motion.div>
  );
}
