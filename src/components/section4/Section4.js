import './Section4.css';
import online from '../../images/online.png';
import inPerson from '../../images/inPerson.png';
import hospital from '../../images/hospital.png';
import doctor from '../../images/doctor.png';
import family from '../../images/family.png';

const Section4 = () => {
  return (
    <div className="Section4">
      <div className="Main">With Smart Meet, You can</div>
      <div className="Facilities">
        <div className="Facility">
          <img src={hospital} alt="hospital" />
          <p>Find a Hospital</p>
        </div>
        <div className="Facility">
          <img src={doctor} alt="doctor" />
          <p>Find a Doctor</p>
        </div>
        <div className="Facility">
          <img src={online} alt="online" />
          <p>Book online Consultation</p>
        </div>
        <div className="Facility">
          <img src={inPerson} alt="inPerson" />
          <p>Book in-person Consultation</p>
        </div>
        <div className="Facility">
          <img src={family} alt="family" />
          <p>Book Consultation for Family</p>
        </div>
      </div>
    </div>
  );
};
export default Section4;
