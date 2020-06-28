import Head from 'next/head'
import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Areski Guilhem Himeur - Curriculum vitæ</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Student in Master's Degree of Theoretical Computer Science at the University of Montpellier" />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content="Areski Guilhem Himeur - Curriculum vitæ" />
                <meta name="og:description" property="og:description" content="Student in Master's Degree of Theoretical Computer Science at the University of Montpellier" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header
                    firstName={"Areski Guilhem"}
                    lastName={"HIMEUR"}
                    subtitle={"Student in Master's Degree of Theoretical Computer Science at the University of Montpellier"}
                    description={"Background in general engineering and in academic and operational research; computability," +
                    " complexity, probabilistic algorithms, optimization, graph theory, etc. "}
                />

                <div className={styles.grid}>
                    <Card
                        title={"Curriculum vitæ"}
                        link={"./CV - Areski Guilhem Himeur.pdf"}
                        description={"A PDF version of my resume in French"}
                    />
                    <Card
                        title={"Contact"}
                        link={"mailto:himeur@areski.info"}
                        description={"Contact me at my address himeur@areski.info"}
                    />
                    <Card
                        title={"Linkedin"}
                        link={"https://www.linkedin.com/in/AreskiHimeur/"}
                        description={"More details on my Linkedin profile"}
                    />
                    <Card
                        title={"Github"}
                        link={"https://github.com/Hareski"}
                        description={"Some projects on my Github account"}
                    />
                </div>
            </main>
            <Footer
                links={[
                    {title: "Source code", link: "https://github.com/Hareski/areski.info"},
                    {title: "Legal", link: "https://github.com/Hareski/areski.info/blob/master/README.md"},
                    {title: "Version française", link: "/"}
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
