'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import { IoMdHand } from "react-icons/io";

import DanielPic from '../../../public/assets/Daniel.jpeg';

const Introduction = () => {
  const controls = useAnimationControls();
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMounted, setIsMounted] = useState(false); 
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const startAnimation = () => {
      const animation = async () => {
        try {
          while (pathName === '/') { // Check isMounted within the loop
            if (controls 
              && typeof controls.start === 'function'
              && pathName === '/') { 
              await controls.start({
                x: 2, 
                y: -1, 
                rotate: 1, 
                transition: { duration: 0.5 }, 
              });
              await controls.start({
                x: -2, 
                y: 1, 
                rotate: -4, 
                transition: { duration: 0.5 }, 
              });
            }
          }
        }
        catch {

        }
        
      };

      animation();
    };

    // Delay the animation start by a small amount (e.g., 100ms)
    setTimeout(() => {
      if (controls && typeof controls.start === 'function') { 
        startAnimation();
      }
    }, 100); 

    return () => {
      setIsMounted(false); 
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      controls.stop(); 
    };
  }, [controls, isMounted, pathName]);

  return (
    <>
     <motion.div 
      layoutId={`introduction`}
      className="grid grid-cols-12 mb-6">
      <motion.div 
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="col-span-4 sm:col-span-5 md:pt-1 xl:col-span-2 lg:pt-10 lg:p-5">
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
        className="col-span-8 sm:col-span-7 xl:col-span-10 lg:pt-4 xl:pt-6 pl-6">
        <h1 className="text-2xl font-bold mb-6 lg:mt-5">Hi, I&apos;m Daniel!</h1>
        <p>Full stack dev, Solutions Architect, and proud builder of things that work (and some things that just make my life easier).</p>
        <p className="hidden md:block">From high-traffic e-commerce to home server wizardry, I love solving problems with code - and maybe over-engineering a few for fun.</p>
        <p className="hidden md:block md:mt-4">Welcome to my little corner of the internet.</p>
      </motion.div>
      <motion.div 
        className="col-span-12 md:hidden mt-4">
        <p>From high-traffic e-commerce to home server wizardry, I love solving problems with code - and maybe over-engineering a few for fun.</p>
        <p className="mt-4">Welcome to my little corner of the internet.</p>
      </motion.div>
    </motion.div>
    </>
    
  );
};

export default Introduction;