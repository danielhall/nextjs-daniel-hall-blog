'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import { IoMdHand } from "react-icons/io";

import DanielPic from '../../../public/assets/Daniel.jpeg';

const Introduction = () => {
  const controls = useAnimationControls();
  const pathName = usePathname();

  useEffect(() => {
  let cancelled = false;

  const startAnimation = async () => {
    return;
    
    while (!cancelled && pathName === '/') {
      try {
        await controls.start({
          x: 2,
          y: -1,
          rotate: 1,
          transition: { duration: 0.5 },
        });
        if (cancelled) break;

        await controls.start({
          x: -2,
          y: 1,
          rotate: -4,
          transition: { duration: 0.5 },
        });
      } catch {
        break; // If animation throws, exit loop
      }
    }
    };

    const timer = setTimeout(() => {
        if (!cancelled) {
        startAnimation();
        }
    }, 100);

    return () => {
        cancelled = true;
        clearTimeout(timer);
        controls.stop();
    };
    }, [controls, pathName]);

  return (
    <>
     <motion.div 
      layoutId={`introduction`}
      className="grid grid-cols-12 mb-6 mt-2 md:mb-4 bg-navigation rounded-2xl shadow-lg p-5">
      <motion.div 
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="col-span-4 sm:col-span-5 md:pt-1 xl:col-span-2 lg:p-5">
        <div className="relative">
          <Image
            src={DanielPic.src}
            alt="Picture of Daniel"
            height={341}
            width={341}
            className="inline rounded-full shadow-lg"
          />
          <div className="absolute bottom-0 left-0">
            <motion.div 
              animate={controls} 
              className="inline-flex items-center justify-center"
            >
              <IoMdHand className="text-yellow-500 w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="col-span-8 sm:col-span-7 xl:col-span-10 pl-6">
        <h1 className="text-2xl font-bold mb-6 lg:mt-5">Hi, I&apos;m Daniel!</h1>
        <p>With more than a decade of hands-on experience, I&apos;ve helped household brands build fast, scalable digital platforms.&nbsp;
          <span className="hidden md:inline">I specialise in clean architecture, thoughtful integration, and guiding technical decisions that balance long-term maintainability with real-world delivery.</span>
        </p>
        <p className="hidden md:block md:mt-4">This is my digital notebook — a space for sharing lessons learned, tools I&apos;ve built, and the ideas I&apos;m exploring next.</p>
      </motion.div>
      <motion.div 
        className="col-span-12 md:hidden mt-4">
        <p>I specialise in clean architecture, thoughtful integration, and guiding technical decisions that balance long-term maintainability with real-world delivery.</p>
        <p className="mt-4">This is my digital notebook — a space for sharing lessons learned, tools I&apos;ve built, and the ideas I&apos;m exploring next.</p>
      </motion.div>
    </motion.div>
    </>
    
  );
};

export default Introduction;