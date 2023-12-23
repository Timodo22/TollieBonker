// Importeer de benodigde modules
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Importeer je CSS-bestand
import { styles } from '../style';

const Form = () => {
  const [formData, setFormData] = useState({
    request: '',
    name: '',
    email: '',
    selectedOption: 'Custom',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.request || !formData.name || !formData.email) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setError(''); // Reset error state

      const botToken = '6528660866:AAEiViSv8_EFiNj-MmF5lOmjSntWohFem8A'; // Vervang dit door jouw Telegram-bot token
      const chatId = '5444784260'; // Vervang dit door jouw Telegram-chat ID

      const message = `Nieuwe aanvraag ontvangen:
        Request: ${formData.request}
        Naam: ${formData.name}
        E-mail: ${formData.email}
        Geselecteerde optie: ${formData.selectedOption}`;

      // Verzend gegevens naar de Telegram-chat met behulp van de Telegram Bot API
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });

      console.log(response.data); // Bericht dat de gegevens succesvol zijn verzonden naar de Telegram-chat
    } catch (error) {
      console.error('Fout bij verzenden formuliergegevens:', error);
    }
  };

  return (
    <div className="form-container bg-tertiary">
      <h2 className='font-bold'>Custom requests:</h2>
      <form onSubmit={handleSubmit}>
        {/* Invoervelden */}
        <label className='font-bold' htmlFor="request">Discription:</label>
        <input className='bg-tertiary'
          type="text"
          id="request"
          name="request"
          value={formData.request}
          onChange={handleChange}
          placeholder="Discripe what do u want."
        />

        <label className='font-bold' htmlFor="name">Name/username:</label>
        <input
          className='bg-tertiary'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Username/name"
        />

        <label className='font-bold' htmlFor="email">E-mail:</label>
        <input
          className='bg-tertiary'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="were we can contact you"
        />

        <label className='font-bold' htmlFor="selectedOption">Select the topic:</label>
        <select
          id="selectedOption"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
          className='bg-tertiary'
        >
          <option value="Individual">Individual</option>
          <option value="Website's">Website's</option>
          <option value="Windows">Windows</option>
          <option value="Flipper zero">Flipper zero</option>
          <option value="Phone's">Phone's</option>
          <option value="Custom">Custom</option>
        </select>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;