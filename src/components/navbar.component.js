import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';


const TopBar = () => {
    return(
        <Navbar bg="primary" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> </Link>{' |'}
                        
                       
                        <Link to="/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Marketing</Link>{'|'}
                       
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                   
                        
                    </h4>
                    
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;