import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import './Works.css';
import Card from './Card';
import cardsData from './cardsData.json';

function Works() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const state = Flip.getState(cards);
        const isCardActive = card.classList.contains('active');

        cards.forEach((otherCard, otherIdx) => {
          otherCard.classList.remove('active');
          otherCard.classList.remove('is-inactive');

          if (!isCardActive && index !== otherIdx) {
            otherCard.classList.add('is-inactive');
          }
        });

        if (!isCardActive) {
          card.classList.add('active');
        }

        gsap.from(state, {
          duration: 4,
          absolute: true,
          ease: 'elastic.out(1,0.5)',
        });
      });
    });
  }, []);

  return (
    <section>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          ref={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </section>
  );
}

export default Works;
