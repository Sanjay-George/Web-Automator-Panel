import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Web Automator</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web Automator allows you to automate a variety of tasks on the web."
        />
        <link rel="icon" href="/wa-icon.jpg" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Glegoo&family=Junge&family=Oswald:wght@300;400&family=Poiret+One&display=swap" rel="stylesheet" />
      </Head>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}
