import p_patients from '../../images/p_patients.svg';
import p_doctors from '../../images/p_doctors.png';
import './Section5.css';
const Section5 = () => {
  return (
    <div className="Section5">
      <div className="Headline">Patients Trust Us</div>
      <div className="Block">
        <div className="Sub">
          <div>
            <img
              src={p_patients}
              alt="patients"
              width="50px"
              style={{ margin: '0px 20px' }}
            />
          </div>
          <div>
            <p className="Stats">200+</p>
            <p className="Types">Hospitals</p>
          </div>
        </div>
        <hr color="#e2e2e2" style={{ width: '1px', border: 'none' }}></hr>
        <div className="Sub">
          <div>
            <img
              src={p_doctors}
              alt="patients"
              width="50px"
              style={{ margin: '0px 20px' }}
            />
          </div>
          <div>
            <p className="Stats">1200+</p>
            <p className="Types">Doctors</p>
          </div>
        </div>
        <hr color="#e2e2e2" style={{ width: '1px', border: 'none' }}></hr>
        <div className="Sub">
          <div>
            <img
              src={p_doctors}
              alt="patients"
              width="50px"
              style={{ margin: '0px 20px' }}
            />
          </div>
          <div>
            <p className="Stats">5000+</p>
            <p className="Types">Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
