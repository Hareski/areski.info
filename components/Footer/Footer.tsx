import React from "react";
import styles from './Footer.module.css'

type FooterLink = { title: string, link: string };
type PropsFooter = { links: FooterLink[] };

export const renderLink = ({title, link}: FooterLink) => (
    <a href={link}>{title}</a>
);

export const Footer = ({links}: PropsFooter) => (
    <footer className={styles.footer}>
        {links.map(link => renderLink(link))}
    </footer>
);

export default Footer;