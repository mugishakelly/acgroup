import React from 'react';
import './style/people.css';
import '../css/main.css';
import adria from '../asset/Adrian.jpg';
import augustin from '../asset/Augustin-scaled.jpg';
import fabrice from '../asset/Fabrice-scaled.jpg';
import dennis from '../asset/Dennis-scaled.jpg';
import diana from '../asset/Diana-scaled.jpg';
import esther from '../asset/Esther-scaled.jpg';
import jones from '../asset/Jones-3.jpg';
import patrick from '../asset/Patrick.png';
import Philipe from '../asset/IMG_9003.jpg';
import pophia from '../asset/Pophia.jpg';
import sharon from '../asset/Sharon.jpg';

function PeoplePage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Jones Kizihira',
      title: 'Chief Executive Officer, AC Mobility',
      image: jones
    },
    {
      id: 2,
      name: 'Patrick B. Nsenga',
      title: 'Chief Executive Officer, AC Group',
      image: patrick
    },
    {
      id: 3,
      name: 'Adrian Mbanda',
      title: 'Chief Marketing Officer, AC Mobility',
      image: adria
    },
    {
      id: 4,
      name: 'Copain Fabrice Bienaime',
      title: 'Chief Technology Officer, AC Mobility',
      image: fabrice
    },
    {
      id: 5,
      name: 'Augustin Harimana',
      title: 'Chief Finance Officer, AC Mobility',
      image: augustin
    },
    {
      id: 6,
      name: 'Dennis Kakai',
      title: 'Head of Pan-Sub Companies, AC Mobility',
      image: dennis
    },
    {
      id: 7,
      name: 'Diana Kaneza',
      title: 'Chief Corporate Officer, AC Mobility',
      image: diana
    },
    {
      id: 8,
      name: 'Esther Mpyisi',
      title: 'Chief Risk and Compliance Officer, AC Mobility',
      image: esther
    },
    {
      id: 9,
      name: 'Philip Ngarambe',
      title: 'Director Global Operations, AC Group',
      image: Philipe,
    },
    {
      id: 10,
      name: 'Pophia Ngarambe',
      title: 'Chief Operations Officer, AC Mobility',
      image: pophia
    },
    {
      id: 11,
      name: 'Sharon Bamurebe',
      title: 'Head of Human Resources, AC Mobility',
      image:sharon
    }
  ];

  return (
      <div className="people">
    <div className="people-page">
      <h1>Our People</h1>
      <p className="people-description">
        We are a young, dynamic and innovative team. We care 
        about every employee's continued growth.
      </p>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      <section className="support-section">
      <div className="container">
          <div className="shape-left"></div>
          <div className="shape-right"></div>
        <div className="support-container">
          
          <div className="support-content">
            <h2 className="support-title">Join the youngest, innovative and dynamic team.</h2>
            <p className="support-text">Email us at careers@acgroup.rw</p>
          </div>
          
          <a href="t" className="contact-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact us
          </a>
        </div>
      </div>
    </section>

    </div>
  );
}

export default PeoplePage;