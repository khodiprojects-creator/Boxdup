import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '3rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Metro Van Services
            </h3>
            <p style={{
              color: '#9ca3af',
              lineHeight: '1.6'
            }}>
              Your trusted partner for mattress removal and furniture delivery across Metro Vancouver.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#9ca3af'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Mattress Removal</li>
              <li style={{ marginBottom: '0.5rem' }}>Box Spring Disposal</li>
              <li style={{ marginBottom: '0.5rem' }}>Furniture Delivery</li>
              <li style={{ marginBottom: '0.5rem' }}>Small Moving Services</li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Contact
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#9ca3af'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>📞 (604) 555-0123</li>
              <li style={{ marginBottom: '0.5rem' }}>📧 info@metrovansvc.com</li>
              <li style={{ marginBottom: '0.5rem' }}>📍 Metro Vancouver, BC</li>
              <li style={{ marginBottom: '0.5rem' }}>🕐 Mon-Sat: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p>© 2025 Metro Vancouver Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
