import './App.css'
import './i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './shared/components/Header';
import Background from './shared/components/Background';
import TitleBlock from './shared/components/TitleBlock';
import SliderTitle from './shared/components/SliderTitle';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Background />
      <AnimatedSection>
        <TitleBlock />
      </AnimatedSection>
      <AnimatedSection>
        <SliderTitle />
      </AnimatedSection>
    </>
  );
}

export default App
