import FAQs from './components/faqs/FAQs';
import Hero from './components/hero-section/Hero';
import Navbar from './components/navbar/Navbar';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Section6 from './components/section6/Section6';
import Section8 from './components/section8/Section8';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <FAQs />
      <Section8 />
    </div>
  );
};

export default App;
