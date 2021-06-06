import Hero from './components/hero-section/Hero';
import Navbar from './components/navbar/Navbar';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;
