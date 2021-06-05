import { Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import './Navbar.css';

const Navbar = () => {
  const AppointmentButton = withStyles((theme) => ({
    root: {
      color: 'white',
      textTransform: 'none',
      margin: '0px 5px',

      backgroundColor: '#532db0',
      '&:hover': {
        backgroundColor: '#3a1f7b',
      },
    },
    text: {
      fontFamily: 'Open Sans, sans-serif',
    },
  }))(Button);

  const RegisterButton = withStyles((theme) => ({
    root: {
      color: '#532db0',
      borderColor: '#532db0',
      border: '1px solid',
      margin: '0px 5px',
      textTransform: 'none',
      backgroundColor: '#0000',
      '&:hover': {
        backgroundColor: '#e6e6e6',
      },
    },
    text: {
      fontFamily: 'Open Sans, sans-serif',
    },
  }))(Button);

  const LoginButton = withStyles((theme) => ({
    root: {
      color: '#532db0',
      textTransform: 'none',
      margin: '0px 5px',
      backgroundColor: '#0000',
      '&:hover': {
        backgroundColor: '#0000',
      },
    },
    text: {
      fontFamily: 'Open Sans, sans-serif',
    },
  }))(Button);

  return (
    <div className="Navbar">
      <div className="Name">
        <p>
          Smart<span style={{ color: '#532db0' }}>Meet</span>
        </p>
      </div>
      <div className="CTAs">
        <LoginButton href="#" disableRipple>
          Login
        </LoginButton>
        <hr size="30" color="#000"></hr>
        <LoginButton href="#" disableRipple>
          Sign Up
        </LoginButton>
        <AppointmentButton>Book Appointment</AppointmentButton>
        <RegisterButton>Register Hospital</RegisterButton>
      </div>
    </div>
  );
};

export default Navbar;
