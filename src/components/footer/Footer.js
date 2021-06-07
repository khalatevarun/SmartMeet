import { Button, InputBase, withStyles } from '@material-ui/core';
import './Footer.css';
import fb from '../../images/fb.png';
import gplus from '../../images/gplus.png';
import twitter from '../../images/twitter.png';

const Footer = () => {
  const AppointmentButton = withStyles((theme) => ({
    root: {
      color: 'white',
      textTransform: 'none',
      margin: '0px 5px',
      fontSize: '18px',
      padding: '9px    ',
      backgroundColor: '#33c881',
      '&:hover': {
        backgroundColor: '#33c881',
      },
    },
    text: {
      fontFamily: 'Open Sans, sans-serif',
    },
  }))(Button);

  return (
    <div className="Footer">
      <div className="WrapperFooter">
        <div className="Sec1">
          <p className="NameFooter">SmartMeet</p>
          <p style={{ color: '#898ebd', width: '200px' }}>
            Be sure to take a look at our Terms of Use and Privacy Policy
          </p>
        </div>
        <div className="Sec2">
          <p className="Start">About</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Team</p>
          <p>Career</p>
          <p>Contact</p>
        </div>
        <div className="Sec3">
          <p className="Start">Company</p>
          <p>Privacy</p>
          <p>Support</p>
          <p>Help Desk</p>
          <p>FAQ</p>
        </div>
        <div className="Sec4">
          <p className="Start">Book an Appointment</p>
          <div className="FooterButton">
            <InputBase
              classNAme="EmailFooter"
              placeholder="Your email"
            ></InputBase>

            <AppointmentButton>Book Appointment</AppointmentButton>
          </div>
          <div className="Icons">
            <img
              src={twitter}
              alt="Twitter"
              width="20px"
              style={{ margin: '0px 10px' }}
            />
            <img
              src={fb}
              alt="Facebook"
              width="20px"
              style={{ margin: '0px 10px' }}
            />
            <img
              src={gplus}
              alt="Google plus"
              width="30px"
              style={{ margin: '0px 10px' }}
            />
          </div>
        </div>
      </div>
      <div className="Horizontal">
        <hr color="#898ebd" />
      </div>
      <div className="Copyright">Copyright2021 Redien.Design</div>
    </div>
  );
};

export default Footer;
