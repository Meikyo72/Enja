import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ezvnzm8', 'template_x717bmh', form.current, 'Kk6ft7H8pjQI0gzGf')
          .then((result) => {
              console.log(result.text);
              alert('Tack för ditt meddelande! Vi återkommer så snart vi kan.');
          }, (error) => {
              console.log(error.text);
                alert('Något gick fel. Vänligen försök igen.');
          });
          e.target.reset();
      };

return (

<div className="contact-container">
<h1>Kontakt</h1>
<p>Vad roligt att ni vill komma i kontakt med oss. Vi berättar gärna om hur vi…. 
<br/>
Fyll i formuläret så kontaktar vi dig inom kort….
</p>
<div className='form-container'>
<form ref={form} onSubmit={sendEmail}>
      <label>Namn</label>
      <input type="text" name="user_name" required/>
      <label>Epostadress</label>
      <input type="email" name="user_email" required/>
      <label>Meddelande</label>
      <textarea name="message" rows={15} required/>
      <input type="submit" value="Skicka" />
    </form>
    </div>
</div>

);

}

export default Contact;