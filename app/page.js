import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsPartners from './components/StatsPartners';
import Features from './components/Features';
import ResumeUpload from './components/ResumeUpload';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <StatsPartners />
        <Features />
        <ResumeUpload />
        <AppShowcase />
      </main>
      <Footer />
    </>
  );
}
