import { educations } from '@/data/educations';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import AcademicCap from '@/components/icons/AcademicCap';
import SectionTitle from '@/components/shared/SectionTitle';

const EducationSection = () => {
  return (
    <>
      <SectionTitle>Education</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-1">
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-800">
            <ol className={classNames(styles['experience'])}>
              {educations.map((education, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-indigo-500 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-800">
                    <AcademicCap className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {education.school}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.degree}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
