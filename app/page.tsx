
import SymbolRandom from './ui/SymbolRandom'
import SingleQuote from './components/SingleQuote'

const API_URL_RANDOM = 'https://quote-garden.onrender.com/api/v3/quotes/random'


async function fetchQuotes() {
  const res = await fetch(API_URL_RANDOM, { cache: 'no-store' })
  const data = await res.json()
  return data
}

export default async function Home() {

  const quote = await fetchQuotes()

  return (
    <SingleQuote/>
  )
}
