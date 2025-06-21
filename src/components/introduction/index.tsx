'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { IoMdHand } from "react-icons/io";

import DanielPic from '../../../public/assets/Daniel.jpeg';
import Amsterdam from '../../../public/assets/amsterdam.jpg';

const Introduction = () => {
  return (
    <div className="mb-6 mt-2 md:mb-4 md:pb-5 md:bg-navigation md:rounded-2xl md:shadow-lg relative overflow-hidden">
      {/* Desktop Amsterdam background image (right) */}
      <div
        className="hidden lg:block absolute top-0 right-0 h-full z-0"
        style={{
          width: '240px',
          backgroundImage: `url(${Amsterdam.src})`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          clipPath: 'polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)',
        }}
      />
      <motion.div className="grid grid-cols-12 md:p-5 pb-2">
        {/* Daniel's picture and hand icon (mobile only) */}
        <motion.div
          className="col-span-4 sm:col-span-5 md:pt-1 xl:col-span-2 lg:p-5 lg:hidden"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
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
        {/* Main text content (always visible) */}
        <motion.div className="col-span-8 sm:col-span-7 xl:col-span-9 pl-6">
          <h1 className="text-2xl font-bold mb-2 md:mb-4 lg:mt-5">Hi, I&apos;m Daniel!</h1>
          <p>
            <span className="md:hidden">
              A Software Solutions Architect for web.
            </span>
            <span className="hidden md:inline">
              I&apos;m a Software Solutions Architect specialising in web. With more than a decade of hands-on experience, I&apos;ve helped household brands build fast, scalable digital platforms. I focus on clean architecture, thoughtful integration, and guiding technical decisions that balance long-term maintainability with real-world delivery.
            </span>
          </p>
          <p className="hidden md:block md:mt-4">
            This website is a continuous project — a space for me to practise writing and share (hopefully) useful insight with other developers.
          </p>
        </motion.div>
        {/* Desktop right empty cell for layout balance */}
        <motion.div className="hidden lg:block col-span-2 xl:col-span-4" />
      </motion.div>
    </div>
  );
};

export default Introduction;