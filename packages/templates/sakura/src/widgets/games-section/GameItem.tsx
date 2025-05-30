'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { CasinoGame } from '@triple-win/api';
import { Button } from '@triple-win/ui';

interface GameItemProps {
  item: CasinoGame;
}

export function GameItem({ item: { imageUrl, name } }: GameItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Define animation variants for the overlay
  const overlayVariants = {
    hidden: { y: '100%' },
    visible: { y: '0%' },
  };

  return (
    <motion.div
      className="relative h-[175px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image src={imageUrl} alt={name} width={350} height={175} className="object-cover w-full h-full" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 dark:bg-black/75 flex flex-col justify-end p-4 rounded-xl"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <h3 className="text-white text-lg font-bold text-center mb-3">{name}</h3>

            <div className="flex justify-center space-x-4">
              <Button
                variant={'ghost'}
                className={'dark:bg-white dark:text-black dark:hover:bg-white/85'}
                size={'lg'}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Demoing: ${name}`);
                }}
              >
                Demo
              </Button>
              <Button
                size={'lg'}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Playing: ${name}`);
                }}
              >
                Play Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
