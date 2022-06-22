import React, { useState } from 'react';
import './Navbar.css';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { CSSTransition } from 'react-transition-group';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Link } from 'react-router-dom';



function Navbar(props) {
    return (
        <div className='navbar'>
            <ul className='navbar-nav'>
                {props.children}
            </ul>
        </div>
    )
}

function Navitem(props) {

    const [open, setOpen] = useState(false)

    return (
        <li className='nav-item'>
            <a className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}


function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const a = document.querySelector('a')
    a.onclick = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    function DropdownItem(props) {
        return (

            <a href={props.href} className='menu-item' onClick={() => props.goToMenu
                && setActiveMenu(props.goToMenu)}>

                <span className='icon-button'>{props.leftIcon}</span>

                {props.children}

                <span className='icon-right'>{props.rightIcon}</span>
            </a>


        );
    }

    return (
        <div className='dropdown'>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem href={process.env.PUBLIC_URL} leftIcon={<AddLocationIcon />}>Exotic LA Rides</DropdownItem>
                    <DropdownItem
                        leftIcon={<DirectionsCarFilledIcon />}
                        goToMenu='settings'> Rides
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
            >
                <div className='menu'>
                    <DropdownItem leftIcon={<ArrowBackIcon />} goToMenu='main'></DropdownItem>
                    <ul className='listofbrands'>
                        <li><Link to="/BMW"> BMW </Link></li>
                        <li><Link to="/Ferrari"> Ferrari </Link></li>
                        <li><Link to="/Lamborghini"> Lamborghini </Link></li>
                        <li><Link to="/McLaren"> McLaren </Link></li>
                        <li><Link to="/Porsche"> Porsche </Link></li>
                    </ul>
                </div >
            </CSSTransition >

        </div >
    );
}

export { Navbar, Navitem, DropdownMenu }