import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Billboard from '@/component/Billboard'
import About from '@/component/About';
import Service from '@/component/Service';
import Features from '@/component/Features';
import Testimonials from '@/component/Testimonials';

export default function Home() {
  return (
    <>
    <Header/>
    <Billboard/>
    <About/>
    <Service/>
    <Features/>
    <Testimonials/>
    <Footer/>
    
    </>
  );
}
