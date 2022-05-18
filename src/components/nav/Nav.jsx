import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineColorLens} from 'react-icons/md'
import { useState } from 'react'

const Nav = ()=>{
    const [activeNav,setActiveNav] = useState('#header')

    const changeTheme = (theme)=>{
        switch (theme) {
            case 1:
                document.documentElement.style.setProperty('--color-primary','#00ADB5')
                break;
            case 2:
                document.documentElement.style.setProperty('--color-primary','#F54768')
                break;
            case 3:
                document.documentElement.style.setProperty('--color-primary','#F0A500')
                break;
            case 4:
                document.documentElement.style.setProperty('--color-primary','#00a884')
                break;
            default:
                break;
        }
    }

    return (
        <nav>
            <a href='#header' onClick={()=>setActiveNav('#header')} className={activeNav ==='#header'?'active':''}><AiOutlineHome/></a>
            <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav ==='#about'?'active':''}><AiOutlineUser/></a>
            <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience'?'active':''}><BiBook/></a>
            <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav ==='#portfolio'?'active':''}><RiServiceLine/></a>
            <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact'?'active':''}><BiMessageSquareDetail/></a>
            <div className='theme-menu'>
                <button ><MdOutlineColorLens/></button>
                <div className='theme-menu-content'>
                    <div className='theme-div theme-1' onClick={()=>{changeTheme(1)}}></div>
                    <div className='theme-div theme-2' onClick={()=>{changeTheme(2)}}></div>
                    <div className='theme-div theme-3' onClick={()=>{changeTheme(3)}}></div>
                    <div className='theme-div theme-4' onClick={()=>{changeTheme(4)}}></div>
                </div>
            </div>
        </nav>
    )
}

export {Nav}