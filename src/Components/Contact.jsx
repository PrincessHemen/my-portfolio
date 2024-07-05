import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rtkeyk', 'template_mouweir', form.current, 'or2RqNYlLzBZeP8Rz')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message.');
      });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purpleLight to-whiteLight dark:from-purpleDark dark:to-blackDark transition-all duration-500">
      <h2 className="text-4xl font-bold font-serif">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="mt-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" id="name" type="text" name="user_name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" id="email" type="email" name="user_email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-purpleLight dark:bg-purpleDark text-white rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
