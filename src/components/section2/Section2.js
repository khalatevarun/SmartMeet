import { steps } from '../../data/data';

const Section2 = () => {
  const process = steps.map((s) => (
    <div>
      <div>{s.no}</div>
      <div>{s.text}</div>
      <div>
        <img src={s.img} alt={s.no} />
      </div>
    </div>
  ));
  return (
    <div>
      <div className="title">How it Works</div>
      {process}
    </div>
  );
};
export default Section2;
