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
        <div>
          <img
            src="/tatooinesuns.png"
            alt="tatooinesuns"
            className="homeimage"
          ></img>
        </div>
        <h2>Bright Suns Traveler</h2>
        <p>Want to talk like a Sith? Gungan? Mandalorian?</p>
        <p id="description">
          This application lets you translate any phrase into different
          languages of the Star Wars universe!
        </p>
        <hr class="solid" />

        <Form />
      </Layout>
      <h4 className="mainflexcontainer">
        <Link href="/about">About </Link>
        <Link href="/contact">Contact</Link>
      </h4>
    </div>
  );
}
