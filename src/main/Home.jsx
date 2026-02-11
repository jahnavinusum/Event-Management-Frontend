import './style.css';
import aboutImg from '../assets/about.jpg';   // SAME IMAGE

export default function Home() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      <div className="hero-overlay">
        <h1>Welcome to Event Management System</h1>
        <p>
          Plan, organize, and celebrate your events with ease and elegance.
        </p>
      </div>

      {/* 👇 Names in corner */}
      <div className="hero-credit">
        Built by Supriya ✨ & Jahnavi 💜
      </div>
    </div>
  );
}
