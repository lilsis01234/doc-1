import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useRef } from 'react'

const Header = () => {

  // const headerRef = useRef(null);

  // const stickyHeaderFunc = () => {
  //   window.addEventListener("scroll", () => {
  //     if(
  //       document.body.scrollTop > 0 ||
  //       document.documentElement.scrollTop > 0
  //     ) {
  //       headerRef.current.classList.add("sticky");
  //     } else {
  //       headerRef.current.classList.remove("sticky");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   stickyHeaderFunc();
  //   return () => window.removeEventListener("scroll", stickyHeaderFunc);
  // })

  const showOrHideMenu = () => {
    const navlinks = document.querySelector(".menu")
    navlinks.classList.toggle('active')
  }

  return (

    <header className='header' >
          <div className="nav__wrapper">

            <div onClick={showOrHideMenu} className="mobile__menu">
              <span>
                ❌
              </span>
            </div>


            <div className="navigation">
            <div className="logo">
              <h1>Visio<span>medico.</span></h1>
            </div>
              <ul className="menu">
                <div onClick={showOrHideMenu} className="mobile__menu__close">
                  <span>
                    <p>❌</p>
                  </span>
                </div>
                <li className="nav__item">
                  <NavLink to="home" className={(navClass)=>navClass.isActive ? 'nav__active' : ""}> 
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="doctor" className={(navClass)=>navClass.isActive ? 'nav__active' : ""}>
                    Docteurs
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="service" className={(navClass)=>navClass.isActive ? 'nav__active' : ""}>
                    Services
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="autre" className={(navClass)=>navClass.isActive ? 'nav__active' : ""}>
                    Autre
                  </NavLink>
                </li>
              </ul>

            </div>
              <div className="login__logout">
                <div className="login">
                  <NavLink to='login'>
                    <button>Singin</button>
                  </NavLink>
                </div>
                <div className="logout">
                  <NavLink to='register'>
                    <button>Signup</button>
                  </NavLink>
                </div>
              </div>
          </div>

    </header>

  )
}

export default Header