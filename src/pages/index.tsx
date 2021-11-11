import Head from "next/head";
import Image from "next/image";
import styles from "^/styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>nextjs-prettier-boilerplate</title>
                <meta
                    name="description"
                    content="Boilerplate with Nextjs, Eslint, Prettier and Jest"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="https://nextjs-prettier-boilerplate.vercel.app">
                        nextjs-prettier-boilerplate
                    </a>
                </h1>

                <div className={styles.grid}>
                    <a
                        href="https://github.com/oBusk/nextjs-prettier-boilerplate"
                        className={styles.card}
                    >
                        <h2>Repo &rarr;</h2>
                        <p>
                            View the repo of nextjs-prettier-boilerplate on
                            github.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
