import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Seo from './seo/Seo';
import EnjaAB from './assets/EnJa-AB.png';

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
<Seo title="Kontakt" description="Vad roligt att ni vill komma i kontakt med oss. Fyll i formuläret så kontaktar vi dig inom kort." image={EnjaAB} url="https://enja.se/kontakt" />
<h1>Kontakt</h1>
<p>Vad roligt att ni vill komma i kontakt med oss.
<br/>
Fyll i formuläret så kontaktar vi dig inom kort.
</p>
<div className='form-container'>
<form ref={form} onSubmit={sendEmail}>
      <label className='required'>Namn</label>
        <input type="text" name="user_name" required/>
      <label className='required'>Epostadress</label>
        <input type="email" name="user_email" required/>
      <label>Telefonnummer</label>
        <input type="tel" name="user_phone"/>
      <label className='required'>Meddelande</label>
      <textarea name="message" rows={12} required/>
        <input type="submit" value="Skicka" />
    </form>
    </div>
</div>

);

}

export default Contact;