import React, { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
      <label>Ert namn</label>
      <input type="text" name="user_name" />
      <label>Eran epostadress</label>
      <input type="email" name="user_email" />
      <label>Ert medelande</label>
      <textarea name="message" />
      <input type="submit" value="Skicka" />
    </form>
    </div>
</div>

);

}

export default Contact;