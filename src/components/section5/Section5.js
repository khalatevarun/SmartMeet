import p_patients from '../../images/p_patients.svg';
import p_doctors from '../../images/p_doctors.png';

const Section5 = () => {
  return (
    <div>
      <div>Patients Trust Us</div>
      <div>
        <div>
          <img src={p_patients} alt="patients" width="40px" />
        </div>
        <div>
          <p>200+</p>
          <p>Hospitals</p>
        </div>
      </div>
      <div>
        <div>
          <img src={p_doctors} alt="patients" width="40px" />
        </div>
        <div>
          <p>1200+</p>
          <p>Doctors</p>
        </div>
      </div>
      <div>
        <div>
          <img src={p_doctors} alt="patients" width="40px" />
        </div>
        <div>
          <p>5000+</p>
          <p>Happy Patients</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
