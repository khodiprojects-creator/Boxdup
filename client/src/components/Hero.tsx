import React from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f766e 0%, #059669 100%)',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          Metro Vancouver Moving & Removal Services
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          opacity: 0.95,
          fontWeight: '300'
        }}>
          Professional Mattress Removal & Furniture Delivery
        </p>
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '3rem',
          opacity: 0.9,
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Reliable, affordable, and eco-friendly services throughout Greater Vancouver
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => scrollToSection('reservation')}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              backgroundColor: 'white',
              color: '#059669',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Book Now
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            View Pricing
          </button>
        </div>

        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '4rem auto 0'
        }}>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              500+
            </div>
            <div style={{
              fontSize: '1rem',
              opacity: 0.9
            }}>
              Happy Customers
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              Same Day
            </div>
            <div style={{
              fontSize: '1rem',
              opacity: 0.9
            }}>
              Service Available
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              100%
            </div>
            <div style={{
              fontSize: '1rem',
              opacity: 0.9
            }}>
              Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
