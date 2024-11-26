
import { navLinks } from '../../constants'
import { profileIcon_ } from '../../utils'

const Navbar = () => {
  return (
    <header>
        <div className='container py-5 flex justify-between items-center'>
            <h1 className='font-bold text-[36px]'>FOOD<span className='text-orange-500'>EAT</span></h1>
            <div className='flex items-center gap-7 uppercase text-[16px]'>
                {navLinks.map((links, index) => (
                    <a href="" key={index} className='hidden md:block hover:border-b-2 border-orange-500 transition-all'>{links}</a>
                ))}
                <img src={profileIcon_} width={40} alt="" />
                <i className="fa-solid fa-chevron-down text-black"></i>
            </div>
        </div>
    </header>
  )
}

export default Navbar