import './style.css';
import aboutImg from '../assets/about.jpg';

export default function About() {
  return (
    <div
      className="about-hero"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      {/* Blur layer */}
      <div className="about-blur"></div>

      {/* Content */}
      <div className="about-overlay">
        <h1>About Event Management</h1>
      </div>
    </div>
  );
}
