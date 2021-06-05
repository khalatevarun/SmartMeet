import dentist from '../images/dentist.png';
import cardiologist from '../images/cardiologist.png';
import pulmonologist from '../images/pulomono.png';
import gastroenterologist from '../images/stomach.png';
import nephrologist from '../images/kidneys.png';
import orthopedic from '../images/knee.png';

export const categories = [
  { img: dentist, name: 'Dentist' },
  { img: cardiologist, name: 'Cardiologist' },
  { img: pulmonologist, name: 'Pulmonologist' },
  { img: orthopedic, name: 'Orthopedic' },
  { img: gastroenterologist, name: 'Gastroenterologist' },
  { img: nephrologist, name: 'Nephrologist' },
];

export const steps = [
  { no: '01', text: 'Select hospita & location', img: dentist },
  { no: '02', text: 'Choose doctor and preferred slot', img: dentist },
  { no: '03', text: 'Add your details and verify', img: dentist },
  { no: '04', text: 'Booking done', img: dentist },
];
