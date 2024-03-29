import React from "react";
import styles from './MainAlert.module.css'
import ReactMarkdown from 'react-markdown'


type PropsMainAlert = { message: string, boxColor: string }

export const MainAlert = ({ message, boxColor }: PropsMainAlert) => (
    <div className={styles.alertBoxMessage} style={{ backgroundColor: boxColor }}>
        <ReactMarkdown className={styles.alertTextMessage}>{message}</ReactMarkdown>
    </div>
);

export default MainAlert;