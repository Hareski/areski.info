import React from "react";
import styles from './MainAlert.module.css'
import ReactMarkdown from "react-markdown";

type PropsMainAlert = { message: string }

export const MainAlert = ({ message }: PropsMainAlert) => (
    <div className={styles.alertBoxMessage}>
        <p className={styles.alertTextMessage}>
            <ReactMarkdown escapeHtml={true} source={message}/>
        </p>
    </div>
);

export default MainAlert;