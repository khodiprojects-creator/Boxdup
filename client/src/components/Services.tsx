import React from 'react';

export default function Services() {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#111827'
        }}>
          Our Services
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '1.125rem',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Professional and eco-friendly removal and delivery services across Metro Vancouver
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#d1fae5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2rem'
            }}>
              🛏️
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#111827'
            }}>
              Mattress Removal
            </h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Safe and responsible disposal of old mattresses and box springs. We ensure proper recycling and eco-friendly disposal methods.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ All mattress sizes</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Box spring removal</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Same-day service available</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Eco-friendly disposal</li>
            </ul>
          </div>

          <div style={{
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#dbeafe',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2rem'
            }}>
              🚚
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#111827'
            }}>
              Furniture Delivery
            </h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Reliable delivery service for small to large furniture items. We handle your furniture with care from pickup to delivery.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Small to large items</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Careful handling</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Multiple stops available</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Affordable rates</li>
            </ul>
          </div>

          <div style={{
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#fef3c7',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2rem'
            }}>
              📍
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#111827'
            }}>
              Metro Vancouver Coverage
            </h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Proudly serving all areas of Metro Vancouver with prompt and professional service.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#6b7280'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Vancouver</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Burnaby & New Westminster</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Surrey & Langley</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ North Shore & Tri-Cities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
