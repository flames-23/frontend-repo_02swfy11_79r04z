import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import { Reviews, Pricing, FAQ, CTA, Footer } from './components/Sections';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
