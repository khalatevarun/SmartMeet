import { partners } from '../../data/data';

const Section3 = () => {
  const Partnerships = partners.map((partner, i) => (
    <div className="Partners">
      <img src={partner} alt={i} />
    </div>
  ));

  return (
    <div className="Section3">
      <div className="Title">Our Partnerships</div>
      <div className="Descrp">
        We have partnered with the best hospitals and doctors in Australia to
        provide you the best healthcare.
      </div>
      <div>{Partnerships}</div>
    </div>
  );
};

export default Section3;
