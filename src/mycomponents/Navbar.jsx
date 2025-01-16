import React from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <nav className='bg-black py-8 mt-40'>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-1/5">
                            <img src={Logo} alt="Logo" /></div>
                        <div className="w-1/4 flex justify-between">
                            <button className='bg-[#c52d2f] px-3 py-2 rounded-sm text-white capitalize'>home</button>
                            <button className='hover:bg-[#c52d2f] duration-300 ease-in-out px-3 py-2 rounded-sm text-white capitalize'>Api</button>
                            <input type="text" placeholder='Search' className='bg-white px-2 py-2 w-[1 50px] rounded-sm outline-none'/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar