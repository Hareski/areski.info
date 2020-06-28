import React from "react";
import styles from './Header.module.css'

type PropsHeader = { firstName: string, lastName: string, subtitle: string, description: string }

export const Header = ({firstName, lastName, subtitle, description}: PropsHeader) => (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.firstName}>{firstName}</span> <span className={styles.lastName}>{lastName}</span>
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
    </div>
);

export default Header;