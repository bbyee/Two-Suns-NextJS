import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

function Contact() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <h3 className="mainflexcontainer">
          <p>
            Email:
            <li>brittanyyee1@gmail.com </li>
          </p>
        </h3>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </Layout>
    </div>
  );
}

export default Contact;
