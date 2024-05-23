import React from 'react';

const Home = () => {
  return (
    <>
      <main className='flex-1'>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Detect and Manage Your Stress</h1>
              <p className="text-lg md:text-xl"> Our app uses advanced AI to detect your stress levels and provide personalized recommendations to help you manage your mental health. </p>
              {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"> Get Started </button> */}
            </div>
            <img src="https://ideogram.ai/api/images/direct/FE5ivzLOR66yAYi02YvjGg.png" width="600" height="400" alt="Stress Detection" className="rounded-lg shadow-lg" style={{ aspectRatio: '600 / 400', objectFit: 'cover' }} />
          </div>
        </section>
        <section id="features" className="py-20 md:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 mb-4 text-gray-500 dark:text-gray-400">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Stress Level Detection</h3>
              <p className="text-gray-500 dark:text-gray-400"> Our app uses advanced AI to continuously monitor your stress levels and provide real-time insights. </p>
            </div>
            <div className="bg-white   p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 mb-4 text-gray-500 dark:text-gray-400">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Personalized Recommendations</h3>
              <p className="text-gray-500 dark:text-gray-400"> Get tailored suggestions to help you manage your stress, including relaxation techniques, lifestyle changes, and more. </p>
            </div>
            <div className="bg-white   p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 mb-4 text-gray-500 dark:text-gray-400">
                <circle cx="5" cy="6" r="3"></circle>
                <path d="M5 9v6"></path>
                <circle cx="5" cy="18" r="3"></circle>
                <path d="M12 3v18"></path>
                <circle cx="19" cy="6" r="3"></circle>
                <path d="M16 15.7A9 9 0 0 0 19 9"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400"> Monitor your stress levels over time and see how your efforts to manage stress are paying off. </p>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <img src="https://ideogram.ai/api/images/direct/H-kcgN8SQhWrFJcglKDvaw.png" width="600" height="400" alt="About" className="rounded-lg shadow-lg" style={{ aspectRatio: '600 / 400', objectFit: 'cover' }} />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Stress Detect</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg"> Stress Detect is a cutting-edge app that uses advanced AI to help you understand and manage your stress levels. Our mission is to empower you to take control of your mental health and live a happier, more fulfilling life. </p>
              {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"> Learn More </button> */}
            </div>
          </div>
        </section>
        
        <section id="contact"  className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div  className=" items-center justify-center  text-center ">
            <div  className="space-y-3">
                <h2  className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p  className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or need help? Our team is here to assist you. Contact us today to learn more about our
                stress detection app.
                </p>
                <p  className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <font color="gray-300">stressreliefgroup@gmail.com</font>
                </p>
              
                
            </div>
            <div  className="mx-auto w-full max-w-sm space-y-2">
                <p  className="text-xs text-gray-500 dark:text-gray-400">
                We'll get back to you as soon as possible.
                <a  className="underline underline-offset-2" href="#">
                    Privacy Policy
                </a>
                </p>
            </div>
            </div>
        </section>
        
      </main>
    </>
  );
};

export default Home;