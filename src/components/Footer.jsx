import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-15 h-[50vh] bg-black relative'>
        <div className='flex h-[70%]'>
            <div className="w-[50%] flex flex-col items-center justify-center">
                <h1 className='text-white text-xl font-medium'>LOGO</h1>
                <h3 className='text-white text-xl font-medium'>Delivering the Finest Granite Globally with Excellence</h3>
            </div>
            <ul className='w-[50%] flex flex-col justify-center gap-3'>
                <li className='flex gap-1'>
                    <img className='p-1 object-contain' width={50} src='/Icons/placeholder.png'/>
                    <div className='text-white'>
                        <h1 className='text-xl font-medium'>Find us</h1>
                        <h4 className='opacity-70'>No.15, Naicker Street, Melur - 625106, Madurai Dist, tamilnadu - India</h4>
                    </div>
                </li>
                <li className='flex gap-1'>
                    <img className='p-1 object-contain' width={50} src='/Icons/calling.png'/>
                    <div className='text-white'>
                        <h1 className='text-xl font-medium'>Call us</h1>
                        <h4 className='opacity-70 '>9894546325</h4>
                    </div>
                </li>
                <li className='flex gap-1'>
                    <img className='p-1 object-contain' width={50} src='/Icons/message.png'/>
                    <div className='text-white'>
                        <h1 className='text-xl font-medium'>Mail us</h1>
                        <h4 className='opacity-70 '>sales@vikaashexports.com</h4>
                    </div>
                </li>
            </ul>
        </div>
        <div className='flex h-[20%] justify-center items-center'>
            <div
            className="flex h-[34px] text-[14px] text-white/60 w-[270px] items-center bg-[#09090b] border pr-2 border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
            >
            <input
                placeholder="Email"
                type="text"
                name="text"
                class="bg-transparent text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
            />
            <img className='cursor-pointer active:scale-125 transition-transform duration-300' width={25} src='/Icons/mail.png' />
            </div>
        </div>
    </div>
  )
}

export default Footer