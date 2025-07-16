import { Theme, useTheme } from '@/hooks/use-theme';
import { Dialog, Switch, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';

const Menu = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false); // Close mobile menu after clicking
  };

  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header text-gray-700 dark:text-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/">
          <a className="text-3xl  font-bold">
            <span>R</span>
            <span className="text-indigo-500">.</span>
          </a>
        </Link>
        <ul className="ml-auto hidden items-center md:flex">
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className={classNames(
                'inline-block px-4 font-semibold transition-colors duration-300 hover:text-indigo-600 hover:underline',
                {
                  'text-indigo-500': isActiveSection('experience'),
                }
              )}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className={classNames(
                'inline-block px-4 font-semibold transition-colors duration-300 hover:text-indigo-600 hover:underline',
                {
                  'text-indigo-500': isActiveSection('skills'),
                }
              )}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={classNames(
                'inline-block px-4 font-semibold transition-colors duration-300 hover:text-indigo-600 hover:underline',
                {
                  'text-indigo-500': isActiveSection('projects'),
                }
              )}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={classNames(
                'inline-block px-4 font-semibold transition-colors duration-150 hover:text-indigo-600 hover:underline',
                {
                  'text-indigo-500': isActiveSection('contact'),
                }
              )}
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          type="button"
          className="ml-auto transition-colors duration-150 hover:text-indigo-500 md:-mt-0.5 md:ml-3"
          onClick={() => toggleTheme()}
        >
          {theme === Theme.LIGHT ? <BsMoonStars size={20} /> : <BsSun size={20} />}
        </button>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex text-gray-700 dark:text-gray-200 md:hidden"
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform origin-right"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform origin-right"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex h-full w-full max-w-xs flex-1 flex-col bg-[#f9f9ff] pt-5 dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white">&#10006;</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="border-b px-2 pb-4 dark:border-gray-700">
                  <Link href="/">
                    <a className="text-3xl  font-bold">
                      <span>R</span>
                      <span className="text-indigo-500">.</span>
                    </a>
                  </Link>
                </div>
                <nav className="mt-4 space-y-1 px-2">
                  <button
                    onClick={() => scrollToSection('experience')}
                    className={classNames(
                      'group flex w-full items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-indigo-600',
                      { 'text-indigo-500': isActiveSection('experience') }
                    )}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className={classNames(
                      'group flex w-full items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-indigo-600',
                      { 'text-indigo-500': isActiveSection('skills') }
                    )}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className={classNames(
                      'group flex w-full items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-indigo-600',
                      { 'text-indigo-500': isActiveSection('projects') }
                    )}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={classNames(
                      'group flex w-full items-center px-2 py-2 text-base font-medium transition-colors duration-150 hover:text-indigo-600',
                      { 'text-indigo-500': isActiveSection('contact') }
                    )}
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Menu;
