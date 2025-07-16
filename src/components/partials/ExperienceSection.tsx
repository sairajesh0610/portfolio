import { experienceSection1, experienceSection2 } from '@/data/experiences';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import { FiBriefcase} from 'react-icons/fi';
import AcademicCap from '@/components/icons/AcademicCap';
import SectionTitle from '@/components/shared/SectionTitle';

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2">
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-800">
            <ol className={classNames(styles['experience'], 'border-l border-gray-200 dark:border-gray-500')}>
              {experienceSection1.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-indigo-500 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-800">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {experience.jobTitle}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.company}
                  </p>
                  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    {experience.responsibilities.map((responsibility, index) => ( 
                      <li key={index} className="mb-1 text-base font-normal text-gray-500 dark:text-gray-200">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-800">
            <ol className={classNames(styles['experience'], 'border-l border-gray-200 dark:border-gray-500')}>
              {experienceSection2.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-indigo-500 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-800">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {experience.jobTitle}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.company}
                  </p>
                  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    {experience.responsibilities.map((responsibility, index) => ( 
                      <li key={index} className="mb-1 text-base font-normal text-gray-500 dark:text-gray-200">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
