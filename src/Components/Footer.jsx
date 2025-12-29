import React from 'react'

function Footer() {
  return (
    <footer className='p-8'>
      <div className="text-center flex justify-center items-center">
        <div className="">
          <h2>Logo</h2>
        </div>
        <button className=' sm:py-2 sm:px-4 py-1 px-3 rounded-full bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:ring text-white '>Sign Up</button>
        <span className=' text-5xl'>/</span>
        <button className=' sm:py-2 sm:px-4 py-1 px-3 rounded-full bg-violet-500 hover:bg-violet-700 active:bg-violet-900 focus:ring text-white'>Log in</button>
      </div>
      <div className="container p-2 flex flex-col md:flex-row gap-8 justify-evenly items-center justify-items-center content-evenly ">

        <div className="bg-orange-500 p-2">
          <h2>Social midia</h2>
          <p>Social media links, email, etc </p>
        </div>
        <div className=" bg-blue-600 p-2">
          <h2>contact social media</h2>
          <p>a form where we take suggetion qustion feedback</p>
        </div>
        <div className=" bg-purple-700 p-2">
          <h2>index</h2>
          <p>all the imp not to easy to find links</p>
        </div>
      </div>
      <p className='font-bold text-center font-serif text-2xl'>Watchers List.</p>
      <p>
        <b> Image Credits & Disclaimer</b><br />
        These images are not created by me and belong to their respective artists/sources.
        I am using them solely for educational/practice purposes in this README (non-commercial).
        No ownership claimed—credit to original creators.
 
      </p>
      <p> 
        <b> 📸 Image Credits</b><br />
        All anime-style images used here belong to their respective owners/artists.
        This project uses them exclusively for educational and practice purposes (e.g., README demo).
        No commercial intent or ownership claimed. Please respect original licenses.
      </p>
    </footer>
  )
}

export default Footer
