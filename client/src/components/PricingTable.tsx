import React from 'react';

interface PricingItem {
  service: string;
  description: string;
  price: string;
}

const pricingData: PricingItem[] = [
  {
    service: 'Single Mattress Removal',
    description: 'Removal and disposal of single/twin mattress',
    price: '$40'
  },
  {
    service: 'Double/Queen Mattress Removal',
    description: 'Removal and disposal of double or queen mattress',
    price: '$50'
  },
  {
    service: 'King Mattress Removal',
    description: 'Removal and disposal of king size mattress',
    price: '$60'
  },
  {
    service: 'Box Spring Removal',
    description: 'Removal and disposal of box spring (any size)',
    price: '$30'
  },
  {
    service: 'Small Furniture Delivery',
    description: 'Delivery of small items (chairs, side tables, etc.)',
    price: '$50 - $80'
  },
  {
    service: 'Medium Furniture Delivery',
    description: 'Delivery of medium items (dining table, dresser, etc.)',
    price: '$80 - $120'
  },
  {
    service: 'Large Furniture Delivery',
    description: 'Delivery of large items (sofa, bed frame, etc.)',
    price: '$120 - $180'
  },
  {
    service: 'Additional Stop',
    description: 'Extra pickup or delivery location',
    price: '$25'
  }
];

export default function PricingTable() {
  return (
    <section id="pricing" style={{
      padding: '4rem 2rem',
      backgroundColor: '#f9fafb'
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
          Service Fees
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '1.125rem',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Serving Metro Vancouver with competitive rates and reliable service
        </p>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#1f2937',
                color: 'white'
              }}>
                <th style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Service
                </th>
                <th style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Description
                </th>
                <th style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: index < pricingData.length - 1 ? '1px solid #e5e7eb' : 'none',
                    backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb'
                  }}
                >
                  <td style={{
                    padding: '1rem 1.5rem',
                    fontWeight: '500',
                    color: '#111827'
                  }}>
                    {item.service}
                  </td>
                  <td style={{
                    padding: '1rem 1.5rem',
                    color: '#6b7280'
                  }}>
                    {item.description}
                  </td>
                  <td style={{
                    padding: '1rem 1.5rem',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: '#059669',
                    fontSize: '1.125rem'
                  }}>
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{
          marginTop: '2rem',
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          * All prices include service within Metro Vancouver. Additional charges may apply for areas outside the service zone.
        </p>
      </div>
    </section>
  );
}
