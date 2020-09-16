//for detailed translation info

import fetch from "isomorphic-unfetch";
import Link from "next/link";

TranslationPage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers["x-forwarded-proto"]}:`
    : location.protocol;
  const host = req ? req.headers["x-forwarded-host"] : location.host;
  const pageRequest = `${protocol}//${host}/api/profiles/${query.id}`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function TranslationPage({ translation }) {
  return (
    <>
      <div>
        <h1>{translation.phrase}</h1>
        <p>{translation.translated}</p>

        <Link href="/">
          <a>← Back to Home</a>
        </Link>
      </div>
    </>
  );
}

export default TranslationPage;
