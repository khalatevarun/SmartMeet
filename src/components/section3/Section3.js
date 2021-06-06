import { partners } from '../../data/data';
import './Section3.css';

const Section3 = () => {
  const Partnerships = partners.map((partner, i) => (
    <div className="Images">
      <img src={partner} alt={i} width="150px" />
    </div>
  ));

  return (
    <div className="Section3">
      <div className="Head">Our Partnerships</div>
      <div className="Descrp">
        We have partnered with the best hospitals and doctors in Australia to
        provide you the best healthcare.
      </div>
      <div className="Partners">{Partnerships}</div>
    </div>
  );
};

export default Section3;
