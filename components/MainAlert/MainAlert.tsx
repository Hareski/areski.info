import React from "react";
import styles from './MainAlert.module.css'
import marked from 'marked';


type PropsMainAlert = { message: string, boxColor: string }

export const MainAlert = ({ message, boxColor }: PropsMainAlert) => (
    <div className={styles.alertBoxMessage} style={{ backgroundColor: boxColor }}>
        <p className={styles.alertTextMessage}>
            <div dangerouslySetInnerHTML={{ __html: marked(message, {sanitize: true})}} />
        </p>
    </div>
);

export default MainAlert;