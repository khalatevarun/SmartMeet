import './Section2.css';
import { steps } from '../../data/data';

const Section2 = () => {
  const Steps = steps.map((step) => (
    <div>
      <div className="Card">
        <div className="No">{step.no}</div>
        <div className="Descp">{step.text}</div>
        <div className="Illus">
          <img src={step.img} alt={steps.no} width="70px" />
        </div>
      </div>
      <div>
        {' '}
        <img src={steps.img} alt={steps.no} />
      </div>
    </div>
  ));
  return (
    <div className="Section2">
      <div className="Title">How it works</div>
      <div className="Steps">{Steps}</div>
    </div>
  );
};
export default Section2;
