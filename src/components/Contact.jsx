import '../styles/Contact.css';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kr945bc', 'template_5haimzw', form.current, 'clu-stSmEq2woPtXB')
      .then(
        () => {
          setStatus('SUCCESS');
          form.current.reset();
        },
        (error) => {
          setStatus('FAILED');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-8 max-w-xl" onSubmit={sendEmail} ref={form}>
        <div className="grid gap-x-8 gap-y-6">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Your name</label>
            <div className="mt-2.5">
              <input type="text" name="name" id="name" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Your idea</label>
            <div className="mt-2.5">
              <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required></textarea>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <button className="rounded-md px-3.5 py-2.5 text-base font-semibold text-white mt-10 button-submit" type="submit">Contact me!</button>
        </div>
      </form>

      {status === 'SUCCESS' && <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-green-600/20">Email sent successfully!</span>

      }
      {status === 'FAILED' && <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Failed to send email. Please try again.</span>
      }
      <div className="absolute h-4/5 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
    </div>
  );
};

export default Contact;
