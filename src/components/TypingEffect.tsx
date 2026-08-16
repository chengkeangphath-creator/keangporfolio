"use client";

import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 2000,
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText((prev) => activeWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // If fully typed, pause before deleting
    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    }

    // If fully deleted, move to the next word
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block relative">
      <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent font-extrabold">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-brand-primary animate-pulse align-middle" />
    </span>
  );
}
