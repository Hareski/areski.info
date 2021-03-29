import Head from 'next/head'
import React from "react";
import Header from "../components/Header/Header";
import MainAlert from "../components/MainAlert/MainAlert";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";
import { request } from "../lib/datocms";

const MAINALERT_QUERY = `query MyQuery { mainAlert { message, boxColor { alpha, blue, green, red } }}`;

export async function getStaticProps() {
    try {
        const alertProps = await request({ query: MAINALERT_QUERY });
        const alertMessage = alertProps.mainAlert.message
        const alertBoxColor = "rgb("
            + alertProps.mainAlert.boxColor.red + ","
            + alertProps.mainAlert.boxColor.green + ","
            + alertProps.mainAlert.boxColor.blue + ","
            + "." + alertProps.mainAlert.boxColor.alpha + ")"
        return { props: { alertMessage, alertBoxColor } };
    } catch (error) {
        const alertMessage = "Error while catching alert message."
        const alertBoxColor = "#CC006620"
        return { props: { alertMessage, alertBoxColor } };
    }
}

export default function Home({ alertMessage, alertBoxColor }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Areski Guilhem Himeur - Curriculum vitæ</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
                <meta name="description" content="Étudiant en Informatique Théorique à l'université de Montpellier" />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content="Areski Guilhem Himeur - Curriculum vitæ" />
                <meta name="og:description" property="og:description"
                      content="Doctorant en Informatique Théorique à l'université de Montpellier"/>
            </Head>
            <main>
                <Header
                    firstName={"Areski Guilhem"}
                    lastName={"HIMEUR"}
                    subtitle={"Doctorant en Informatique Théorique à l'université de Montpellier"}
                    description={"Formation  à la recherche académique et opérationnelle et d’ingénieurs généralistes; " +
                    "intelligence artificielle, optimisation, théorie des graphes, calculabilité, complexité, " +
                    "algorithmique probabiliste, etc."}
                />
                <MainAlert message={alertMessage} boxColor={alertBoxColor} ></MainAlert>
                <div className={styles.grid}>
                    <Card
                        title={"Curriculum vitæ"}
                        link={"./CV - Areski Guilhem Himeur.pdf"}
                        description={"Une version PDF de mon Curriculum vitæ"}
                    />
                    <Card
                        title={"Contact"}
                        link={"mailto:himeur@areski.info"}
                        description={"Contactez moi sur himeur@areski.info"}
                    />
                    <Card
                        title={"Linkedin"}
                        link={"https://www.linkedin.com/in/AreskiHimeur/"}
                        description={"Plus de détails sur mon profil Linkedin"}
                    />
                    <Card
                        title={"Github"}
                        link={"https://github.com/Hareski"}
                        description={"Quelques projets sur mon compte Github"}
                    />
                </div>
            </main>
            <Footer
                links={[
                    {title: "Code source", link: "https://github.com/Hareski/areski.info"},
                    {title: "Mentions Légales", link: "https://github.com/Hareski/areski.info/blob/master/README.md"},
                ]}
            />

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * { box-sizing: border-box; }
      `}</style>
        </div>
    )
}
