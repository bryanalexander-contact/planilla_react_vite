import React from 'react';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <main>
      <section style={styles.hero}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Clínica Dental Smile</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Tecnología avanzada para tu salud bucal.</p>
        <a href="#booking" style={styles.cta}>Ver disponibilidad</a>
      </section>

      <section id="booking" style={styles.bookingSection}>
        <h2 style={{ marginBottom: '30px' }}>Reserva tu Cita Online</h2>
        <BookingForm />
      </section>
    </main>
  );
};

const styles = {
  hero: { padding: '80px 20px', backgroundColor: '#e9ecef', textAlign: 'center' },
  cta: { display: 'inline-block', marginTop: '20px', padding: '12px 30px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' },
  bookingSection: { padding: '60px 20px', textAlign: 'center' }
};

export default Home;