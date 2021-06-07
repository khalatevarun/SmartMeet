import { tips } from '../../data/data';

const Section6 = () => {
  const advices = tips.map((tip) => (
    <div>
      <div>
        <img src={tip.img} alt={tip.title} />
      </div>
      <div>{tip.date}</div>
      <div>{tip.title}</div>
      <div>{tip.summary}</div>
    </div>
  ));

  return <div>{advices}</div>;
};

export default Section6;
