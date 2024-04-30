import React, { useState } from 'react'
import { brainwave } from '../assets'
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom'
import { Button, LoginScreen } from './supports'
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'


const Header = () => {
    const location = useLocation()
    const [openNav, setOpenNav] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [loginType, setLoginType] = useState();

    const toggleNav = () => {
        if (openNav) {
            setOpenNav(false);
            enablePageScroll();
        } else {
            setOpenNav(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNav) return;

        enablePageScroll();
        setOpenNav(false);
    };

    const toggleLoginScreen = () => {
        if (toggleLogin) {
            setToggleLogin(false);
            enablePageScroll();
        } else {
            setToggleLogin(true);
            disablePageScroll();
        }
    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNav ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img
                        src={brainwave}
                        alt="brainwaveimage"
                        width={190}
                        height={40}
                    />
                </a>

                <nav className={`${openNav ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>

                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                href={item.url}
                                key={item.id}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-color hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                                <div className={`relative mx-auto border w-1 h-1 border-white rounded-full bg-white items-center ${item.url === location.hash ? 'block' : 'hidden'}`} />
                            </a>
                        ))}

                    </div>
                    <HamburgerMenu />
                </nav>

                <a
                    href="#signUp"
                    className='button hidden lg:block mr-8 text-n-1/50 transition-colors hover:text-n-1'
                    onClick={() => {
                        toggleLoginScreen();
                        setLoginType("Sign Up");
                    }}
                >
                    <span>New Account</span>
                </a>

                <Button className='hidden lg:flex' children='Sign In'
                    onClick={() => {
                        toggleLoginScreen();
                        setLoginType("Sign In");
                    }}
                />


                <Button className='ml-auto lg:hidden' px='px-3' onClick={() => toggleNav()}>
                    <MenuSvg openNav={openNav} />
                </Button>
            </div>

            {toggleLogin && <LoginScreen type={loginType} />}
        </div>
    )
}

export default Header