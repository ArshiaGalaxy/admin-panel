import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import bg from '../assets/images/navbar-bg.jpg';
import avatar from '../assets/images/profile.jpg';

function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className='fixed lg:static shadow-lg flex lg:flex-col justify-between items-center px-4 py-2 lg:p-0 top-0 right-0 h-16 lg:min-h-screen w-screen lg:w-fit bg-cover lg:bg-contain' style={{'backgroundImage': `url(${bg})`}}>
            <Link to='/' onClick={()=>{setOpen(false)}}>
                <div className='group flex lg:flex-col lg:px-16 lg:py-4 items-center gap-4'>
                    <img alt='' src={avatar} className='shadow-lg rounded-full size-12 lg:size-24 object-cover outline outline-1 outline-white group-hover:outline-green-400 outline-offset-2'/>
                    <span className='font-black text-white group-hover:text-green-400 lg:text-2xl'>ادمین پنل</span>
                </div>
            </Link>
            <div className={`fixed lg:static top-16 overflow-hidden start-0 w-screen lg:w-full lg:h-full ${open ? 'h-full' : 'h-0'} bg-slate-900`}>
                <ul className='divide-y divide-gray-500'>
                    <li>
                        <NavLink to='/' onClick={()=>{setOpen(false)}} className={({isActive})=>isActive ? 'text-green-400 bg-gradient-to-l from-slate-800' : 'text-gray-100'}>
                            <div className='flex items-center px-4 py-2 gap-4 hover:text-green-400 bg-gradient-to-l hover:from-slate-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                </svg>
                                <span>کاربران</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' onClick={()=>{setOpen(false)}} className={({isActive})=>isActive ? 'text-green-400 bg-gradient-to-l from-slate-800' : 'text-gray-100'}>
                            <div className='flex items-center px-4 py-2 gap-4 hover:text-green-400 bg-gradient-to-l hover:from-slate-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
                                </svg>
                                <span>پست ها</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' onClick={()=>{setOpen(false)}} className={({isActive})=>isActive ? 'text-green-400 bg-gradient-to-l from-slate-800' : 'text-gray-100'}>
                            <div className='flex items-center px-4 py-2 gap-4 hover:text-green-400 bg-gradient-to-l hover:from-slate-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                </svg>
                                <span>گالری</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`flex lg:hidden flex-col ${open ? '' : 'gap-2'} justify-center items-center cursor-pointer rounded-full size-8 border border-white`} onClick={()=>{setOpen(!open)}}>
                <span className={`h-px w-4  shadow-lg ${open ? 'rotate-45 bg-green-400' : 'bg-white'} `}></span>
                <span className={`h-px ${open ? '-m-px -rotate-45 bg-green-400' : 'bg-white'} w-4  shadow-lg`}></span>
            </div>
        </nav>
    )
}

export default Navbar;