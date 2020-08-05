import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

function About() {
  return (
    <div>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <p>
          Just a fun app built with Next.js to show off my love of Star Wars!
        </p>
        <p>
          This app utilizes funtranslations.com APIs (free tier) which limits
          only 60 requests per day, 5 per hour. Please go easy on this app, and
          may the spires keep you!
        </p>
        <style jsx>{`
          p {
            color: #2e2f30;
            font-size: 30px;
          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        `}</style>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
        <style jsx>{`
            p {
              font-family: Andale Mono
              color: #2e2f30;
              font-size: 12px;
            }
            div {
              background: red;
            }
            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
          `}</style>
      </Layout>
    </div>
  );
}

export default About;
