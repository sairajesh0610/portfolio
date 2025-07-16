import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { skills } from '@/data/skills';

const SkillsSection = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <div className="py-15 mt-10">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-row items-center justify-center p-1.5 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 cursor-pointer group border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
              >
                <div className="mr-1.5 flex h-7 w-7 items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={26}
                    height={26}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs font-normal leading-none text-gray-800 dark:text-gray-100 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
