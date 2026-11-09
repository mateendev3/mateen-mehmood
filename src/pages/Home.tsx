import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Hero } from '../components/home/Hero';
import { Credibility } from '../components/home/Credibility';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { AboutPreview } from '../components/home/AboutPreview';
import { Skills } from '../components/home/Skills';
import { Process } from '../components/home/Process';
import { Testimonials } from '../components/home/Testimonials';
import { WhyMe } from '../components/home/WhyMe';
import { FinalCta } from '../components/home/FinalCta';

export default function Home() {
  useDocumentMeta(pageMeta.home);
  return (
    <>
      <Hero />
      <Credibility />
      <FeaturedProjects />
      <ServicesPreview />
      <AboutPreview />
      <Skills />
      <Process />
      <Testimonials />
      <WhyMe />
      <FinalCta />
    </>
  );
}
