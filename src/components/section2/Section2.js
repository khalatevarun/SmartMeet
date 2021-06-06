import './Section.css';
import dentist from '../../images/dentist.png';

const Section2 = () => {
  const steps = [
    { no: '01', text: 'Select hospital & location', img: dentist },
    { no: '02', text: 'Choose doctor and preferred slot', img: dentist },
    { no: '03', text: 'Add your details and verify', img: dentist },
    { no: '04', text: 'Booking done', img: dentist },
  ];
  return (
    <div className="Section2">
      <div className="Title">How it works</div>
      <div className="Steps">
        <div className="Card">
          <div className="No">{steps[0].no}</div>
          <div className="Descp">{steps[0].text}</div>
          <div className="Illus">
            <img src={steps[0].img} alt={steps[0].no} />
          </div>
        </div>
        <div>
          {' '}
          <img src={steps[0].img} alt={steps[0].no} />
        </div>
        <div className="Card">
          <div className="No">{steps[1].no}</div>
          <div className="Descp">{steps[1].text}</div>
          <div className="Illus">
            <img src={steps[1].img} alt={steps[1].no} />
          </div>
        </div>
        <div>
          {' '}
          <img src={steps[0].img} alt={steps[0].no} />
        </div>
        <div className="Card">
          <div className="No">{steps[2].no}</div>
          <div className="Descp">{steps[2].text}</div>
          <div className="Illus">
            <img src={steps[2].img} alt={steps[2].no} />
          </div>
        </div>
        <div>
          {' '}
          <img src={steps[0].img} alt={steps[0].no} />
        </div>
        <div className="Card">
          <div className="No">{steps[3].no}</div>
          <div className="Descp">{steps[3].text}</div>
          <div className="Illus">
            <img src={steps[3].img} alt={steps[3].no} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
