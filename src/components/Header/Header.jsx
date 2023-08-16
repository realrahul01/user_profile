import {Container,Navbar,Nav, Button} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import route from './../../routes/route.json'
import styles from './Header.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

  
const Header = ()=>{

  const btnLogoutHandler =()=>{
    logoutHandler()
  }

  const clickHandler=()=>{
    toggleTheme()
  }
  const {isDark,toggleTheme} = useContext(ThemeContext)
  const {isUserLogin,logoutHandler} = useContext(AuthContext)

    return (  
        <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{fontStyle:"italic",fontWeight:800,color:'#fff'}}>
          <Navbar.Brand href='/'>User_profile official</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className={({isActive})=> isActive? styles.activeLink : styles.NavLink_style} to={route.PROFILES}>Profiles</NavLink>
            </Nav.Link>
            {isUserLogin && (
              <>
              <Nav.Link>
                    <NavLink className={({isActive})=> isActive? styles.activeLink : styles.NavLink_style} to={route.CREATE_USER}>create-user</NavLink>
               </Nav.Link>
                <Nav.Link>
                    <NavLink className={({isActive})=> isActive? styles.activeLink : styles.NavLink_style} to={route.SETTING}>Setting</NavLink>
                </Nav.Link>
              </>
            )}
                  <Nav.Link>
                <NavLink className={({isActive})=> isActive? styles.activeLink : styles.NavLink_style} to={route.HELP}>Help</NavLink>
                  </Nav.Link>
          </Nav>
          <Nav.Link>
            <NavLink to={route.LOGIN}>
              {isUserLogin && (
                <Button onClick={btnLogoutHandler} className='btn-sm btn-light mx-2'>Logout</Button>
                )}
              {!isUserLogin && (
                <Button className='btn-sm btn-light mx-2'>Login</Button>
              )}
                 
            </NavLink>
          </Nav.Link>
          <Nav>
            <Button onClick={clickHandler}>
                  {isDark?<i className="bi bi-brightness-high-fill text-white"></i>:<i className="bi bi-moon-stars-fill text-white"></i>}
            </Button>
          </Nav>
          <Nav>
                <Nav.Link>
                  {isUserLogin &&(
                      <NavLink className={({isActive})=> isActive? styles.activeLink : styles.NavLink_style} to={route.HOME}> <i className="bi bi-person-check-fill"></i> Rahul</NavLink>
                    )}
                </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header


