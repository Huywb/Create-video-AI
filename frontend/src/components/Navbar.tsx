import { DollarSignIcon, FolderEditIcon, GalleryHorizontalEnd, MenuIcon, SparkleIcon, XIcon } from 'lucide-react';
import { GhostButton, PrimaryButton } from './Buttons';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useClerk, UserButton, useUser } from '@clerk/react';
import api from '../config/axios';
import toast from 'react-hot-toast';

export default function Navbar() {

    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn, openSignUp } = useClerk()
    const [isOpen, setIsOpen] = useState(false);

    const [credits,setCredits] = useState(0)
    const {pathname} = useLocation()

    const {getToken} = useAuth()

    const getUserCredit = async()=>{
        try {
            const token = await getToken()
            const res = await api.get('/api/v1/user/credits',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res)
            setCredits(res.data.data)
        } catch (error : any) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user){
            getUserCredit()
        }
    },[user,pathname])

    console.log(credits)

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'Create', href: '/generate' },
        { name: 'Community', href: '/community' },
        { name: 'Plans', href: '/plans' },
    ];

    return (
        <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div className='max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
                <div className='flex items-center'>
                    <Link to='/' onClick={() => scrollTo(0, 0)}>
                        <img src='/logo.png' alt="logo" className="w-16" />
                    </Link>
                    <p className='font-bold text-white'>CV-Auto</p>
                </div>

                <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
                    {navLinks.map((link) => (
                        <Link onClick={() => scrollTo(0, 0)} to={link.href} key={link.name} className="hover:text-white transition">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {
                    !user ? (
                        <div className='hidden md:flex items-center gap-3'>
                            <button onClick={() => openSignIn()} className='text-sm font-medium text-gray-300 hover:text-white transition max-sm:hidden'>
                                Sign in
                            </button>
                            <PrimaryButton onClick={() => openSignUp()} className='max-sm:text-xs hidden sm:inline-block'>Get Started</PrimaryButton>
                        </div>
                    ) : (
                        <div className='flex gap-2'>
                            <GhostButton onClick={() => navigate('/plans')}
                                className='border-none text-gray-300 sm:py-1.5'>
                                Credits: {credits}
                            </GhostButton>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action onClick={() => navigate('/generate')} label='Generate' labelIcon={<SparkleIcon size={14}></SparkleIcon>}></UserButton.Action>
                                    <UserButton.Action onClick={() => navigate('/my-generations')} label='My Generations' labelIcon={<FolderEditIcon size={14}></FolderEditIcon>}></UserButton.Action>
                                    <UserButton.Action onClick={() => navigate('/community')} label='Community' labelIcon={<GalleryHorizontalEnd size={14}></GalleryHorizontalEnd>}></UserButton.Action>
                                    <UserButton.Action onClick={() => navigate('/plans')} label='Plans' labelIcon={<DollarSignIcon size={14}></DollarSignIcon>}></UserButton.Action>
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>
                    )
                }

                {
                    !user && (
                        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                            <MenuIcon className='size-6' />
                        </button>)
                }
            </div>
            <div className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}

                <button onClick={() => {setIsOpen(false); openSignIn()}} className='font-medium text-gray-300 hover:text-white transition'>
                    Sign in
                </button>
                <PrimaryButton onClick={() => {setIsOpen(false); openSignUp()}}>Get Started</PrimaryButton>

                <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
                >
                    <XIcon />
                </button>
            </div>
        </motion.nav>
    );
};