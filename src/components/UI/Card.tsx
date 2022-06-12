import { PropsWithChildren } from 'react';
import styles from './Card.module.css';

interface CardProps {
  className?: string
}

const Card: React.FC<PropsWithChildren<CardProps>> = (props) => {
  return (
    <section
      className={`${styles.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
