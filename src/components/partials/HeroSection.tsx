import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Sai Rajesh Gudimetla</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['Fullstack Developer', 'Frontend Developer', 'Mobile App Developer']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.linkedin.com/in/sai-rajesh-7433ba16a/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-indigo-500">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://www.facebook.com">
            <a className="text-gray-700 transition-colors duration-150 hover:text-indigo-500">
              <FiFacebook size={25} />
            </a>
          </Link>
          <Link href="https://www.dribble.com">
            <a className="text-gray-700 transition-colors duration-150 hover:text-indigo-500">
              <FiInstagram size={25} />
            </a>
          </Link>
          <Link href="https://github.com/sairajesh0610">
            <a className="text-gray-700 transition-colors duration-150 hover:text-indigo-500">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
