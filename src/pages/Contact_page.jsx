import React from 'react'

const Contact_page = () => {
  return (
    <div>
      <div className='w-full h-[50vh] relative flex'>
        <img className='w-full h-full object-cover' src='/public/Images/product_Image/wallpaper.png' />
        <div className='product_head_overlay text-white flex flex-col items-center gap-3 justify-center'>
          <h2 className='product_title text-5xl'>Contact us</h2>
        </div>
      </div>
      <div className='text-center m-10'>
        <h1 className='text-3xl font-semibold'>Let's Start a Conversation</h1>
      </div>
      <div className='flex w-screen h-[50vh]'>
        <div className='flex flex-col w-[50vw] p-10 bg-amber-200'>
          <h2 className='text-3xl font-bold px-7 pb-3 pr-4'>Get in Touch</h2>
          <p className='text-pretty px-7'>If you are looking for premium granite with unmatched quality and reliability, look no further than Vikaash exports. Contact us today to explore our product range and discover how we can bring the beauty of natural stone to your projects.  </p>
        </div>
        <div className='flex flex-col w-[50vw] bg-amber-400 p-10'>
          <div>
            <input className='rounded-sm p-1.5 border-gray-100 border-2 text-sm w-50 h-9 mr-5' type='text' placeholder='First name'/>
            <input className='rounded-sm p-1.5 border-gray-100 border-2 text-sm w-50 h-9' type="text" placeholder='Last name'/>
          </div>
          <div className='mt-4'>
            <label className='block py-1'>Phone Number</label>
            <input className='rounded-sm p-1.5 border-gray-100 border-2 text-sm w-50 h-9' type='tel' placeholder='Phone Number'/>
          </div>
          <div className='mt-4'>
            <label className='block py-1'>Email</label>
            <input className='rounded-sm p-1.5 border-gray-100 border-2 text-sm w-50 h-9' type='email' placeholder='Email'/>
          </div>
          <div className='mt-4'>
            <label className='block py-1'>Message</label>
            <input className='rounded-sm p-1.5 border-gray-100 border-2 text-sm w-50 h-9' type='text' placeholder='Email'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact_page