import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    hora: '',
    servicio: 'Evaluación General'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await fetch('https://hook.eu1.make.com/9kz3658jheo2hhnc913nkmts4k4dej21', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert("¡Reserva enviada con éxito!");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un fallo al enviar.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required style={styles.input} />
      <input type="email" name="email" placeholder="Email de contacto" onChange={handleChange} required style={styles.input} />
      <input type="date" name="fecha" onChange={handleChange} required style={styles.input} />
      
      <select name="hora" onChange={handleChange} required style={styles.input}>
        <option value="">Selecciona una hora</option>
        <option value="09:00">09:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="15:00">03:00 PM</option>
      </select>

      <button type="submit" style={styles.button}>Reservar ahora</button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '350px', margin: '0 auto' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' },
  button: { padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }
};

export default BookingForm;