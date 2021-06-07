import apple_store from '../../images/apple_store.png';
import play_store from '../../images/play_store.png';
import mobile from '../../images/mobile.png';
import './Section8.css';

const Section8 = () => {
  return (
    <div className="Section8">
      <div className="Div1">
        <div
          className="TitleBookings
        "
        >
          For faster bookings,
          <br /> Use Smart Meet App
        </div>
        <div>
          <img src={play_store} alt="play store" />
          <img src={apple_store} alt="apple store" />
        </div>
      </div>
      <div className="Div2">
        <img src={mobile} alt="mobiles" />
      </div>
    </div>
  );
};

export default Section8;
