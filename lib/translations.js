import fetch from "isomorphic-unfetch";

export default async function getTranslationData() {
  const res = await fetch(
    `https://api.funtranslations.com/translate/${this.state.type}.json?text=${this.state.phrase}`
  )
  return res.json()
}
