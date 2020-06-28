import React from "react";
import styles from './Card.module.css'

type PropsCard = { title: string, link: string, description: string }

export const Card = ({title, link, description}: PropsCard) => (
    <a href={link} className={styles.card}>
        <h3>{title}  &rarr;</h3>
        <p>{description}</p>
    </a>
);

export default Card;