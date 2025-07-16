import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import EducationSection from '@/components/partials/EducationSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import SkillsSection from '@/components/partials/SkillsSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <section className="container pt-20 pb-8">
        <AboutSection />
      </section>
      <section id="experience" className="container py-8">
        <ExperienceSection />
      </section>
      <section className="container py-8">
        <EducationSection />
      </section>
      <section id="skills" className="container py-8">
        <SkillsSection />
      </section>
      {/* <section id="projects" className="container py-8">
        <RecentWorkSection />
      </section> */}
      <section id="contact" className="container py-8">
        <ContactSection />
      </section>
    </AppLayout>
  );
};


export default Home;
