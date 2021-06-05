import './Hero.css';
import dentist from '../../images/dentist.png';
import {
  Button,
  Input,
  InputAdornment,
  InputBase,
  withStyles,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Carousel from './Carousel';

const Hero = () => {
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

  return (
    <div className="Hero">
      <div className="Highlight">
        <p>
          Book appointment for{' '}
          <span style={{ color: '#e94a90' }}>you and your family</span> with
          qualified doctors online
        </p>
      </div>

      <Carousel />

      <div className="Location">
        <div className="locationInput">
          <InputBase
            placeholder="Location"
            startAdornment={
              <InputAdornment position="start">
                <LocationOnIcon color="disabled" />
              </InputAdornment>
            }
          />
        </div>
        <div className="verticalLine">
          <hr size="50" color="#000"></hr>
        </div>
        <div className="locationType">
          <InputBase
            placeholder="Doctor, speciality, hospital or treatment"
            startAdornment={
              <InputAdornment position="start">
                <MyLocationIcon color="disabled" />
              </InputAdornment>
            }
          />
        </div>
        <AppointmentButton variant="contained" disableElevation color="#fff">
          Book Now
        </AppointmentButton>
      </div>
    </div>
  );
};

export default Hero;
