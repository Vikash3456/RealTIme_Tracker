import React from 'react'
import './Hero.css'
const Hero = () => {
  const handleRedirect = () => {
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');
    
    hero.classList.add('slide-out');
    content.classList.add('slide-out');
    
    setTimeout(() => {
      window.location.href = "http://localhost:3000/map";
    }, 900);
  };
  return (
    <>
    <div className="hero">
    </div>
    <div className='content'>
      <h1>Backend Project 🚀<br/>Real-Time Device Tracker</h1>
      <div className="sub-content">
        <h2>Track your live location on the map in real-time using<br/>Node.js, Express, Socket.io, and Leaflet.js 🌍📍</h2>
        <p>
          Built with powerful backend tech and interactive frontend maps,<br/>
          this project shows your device's exact position with high accuracy<br/>
          in just one click. Perfect for learning real-time communication<br/>
          with WebSockets 💡⚙️
        </p>
      </div>
      <button onClick={handleRedirect}>✨ Get Started →</button>
    </div>
    </>
  )
}

export default Hero