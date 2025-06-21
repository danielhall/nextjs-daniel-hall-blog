'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

import { IoMdHand } from "react-icons/io";

import DanielPic from '../../../public/assets/Daniel.jpeg';

const Introduction = () => {
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
            <div className="inline-flex items-center justify-center">
              <IoMdHand className="text-yellow-500 w-12 h-12" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="col-span-8 sm:col-span-7 xl:col-span-10 pl-6">
        <h1 className="text-2xl font-bold mb-4 lg:mt-5">Hi, I&apos;m Daniel!</h1>
        <p>
          I&apos;m a Software Solutions Architect specialising in web. With more than a decade of hands-on experience, I&apos;ve helped household brands build fast, scalable digital platforms.&nbsp;
          <span className="hidden md:inline">
            I focus on clean architecture, thoughtful integration, and guiding technical decisions that balance long-term maintainability with real-world delivery.
          </span>
        </p>
        <p className="hidden md:block md:mt-4">
          This website is a continuous project — a space for me to practise writing and share (hopefully) useful insight with other developers.
        </p>
      </motion.div>
      <motion.div 
        className="col-span-12 md:hidden mt-4">
        <p>
          I focus on clean architecture, thoughtful integration, and guiding technical decisions that balance long-term maintainability with real-world delivery.
        </p>
        <p className="mt-4">
          This website is a continuous project — a space for me to practise writing and share (hopefully) useful insight with other developers.
        </p>
      </motion.div>

    </motion.div>
    </>
    
  );
};

export default Introduction;