import React from 'react';
import Benefits from '../../components/Benefits';
import Hero from '../../components/Hero';
import Business from '../../components/Business';
import Team from '../../components/Team';
import Footer from 'components/Footer';
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Business />
      <Team />
      <Footer />
    </div>
  );
}
