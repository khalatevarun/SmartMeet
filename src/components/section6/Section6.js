import { tips } from '../../data/data';
import './Section6.css';

const Section6 = () => {
  const advices = tips.map((tip) => (
    <div className="Single">
      <div className="Pic">
        <img src={tip.img} alt={tip.title} height="200px" />
      </div>
      <div className="Date">{tip.date}</div>
      <div className="TipTitle">{tip.title}</div>
      <div className="TipSummary">{tip.summary}</div>
    </div>
  ));

  return (
    <div className="Section6">
      <div className="HealthTitle">Health tips and Advise</div>
      <div className="TipsWrapper">{advices}</div>
    </div>
  );
};

export default Section6;
