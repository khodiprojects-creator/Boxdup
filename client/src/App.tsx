import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingTable from './components/PricingTable';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Hero />
      <Services />
      <PricingTable />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
