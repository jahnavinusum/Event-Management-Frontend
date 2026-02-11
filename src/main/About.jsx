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

        <p>
          Hello all,
          <br /><br />
          As a part of our skill development project this semester, we have made
          this event management platform which has 3 pages:
          <strong> Customer</strong>, <strong> Admin</strong>, and
          <strong> Manager</strong>.
          <br /><br />
          Please go through them and give us your feedback.
        </p>
      </div>
    </div>
  );
}
