import '../styles/Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_kr945bc', 'template_5haimzw', form.current, {
          publicKey: 'clu-stSmEq2woPtXB',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


    return ( 
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
  </div>
  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={sendEmail} ref={form}>
    <div className="grid gap-x-8 gap-y-6">
    <div className="sm:col-span-2">
        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Your name</label>
        <div className="mt-2.5">
          <input type="text" name="name" id="name" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Your idea</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md px-3.5 py-2.5 text-base font-semibold text-white mt-10 button-submit" type='submit'>Contact me!</button>
    </div>
  </form>
</div>

    )
}
export default Contact;
