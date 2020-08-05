import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import Form from "../components/Form.jsx";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Two Suns Translations</title>
        </Head>
        <div className="hero">
          <div className="hero-overlay">
            <h2 id="hero-header">Two Suns Translator</h2>
          </div>
          <img
            src="/tatooinesuns.png"
            alt="tatooinesuns"
            className="hero-image"
          ></img>
        </div>
        {/* <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Two Suns Translations</h2> */}
        {/* <img
          src="/tatooinesuns.png"
          alt="tatooinesuns"
          className="homeimage"
        ></img> */}
        {/* </div>
        </section> */}

        <h2>Bright Suns Traveler</h2>

        <p id="description1">Want to talk like a Sith? Gungan? Mandalorian?</p>
        <p id="description2">
          This application lets you translate any phrase into different
          languages of the Star Wars universe!
        </p>
        <hr class="solid" />

        <Form />
        <h4 className="mainflexcontainer">
          <Link href="/about">About </Link>
          <Link href="/contact">Contact</Link>
        </h4>
      </Layout>
    </div>
  );
}
