import Quote from './components/Quote'
import ButtonRandomQuote from './components/ButtonRandomQuote'
const API_URL_RANDOM = 'https://quote-garden.onrender.com/api/v3/quotes/random'





export default async function Home() {
  const res = await fetch(API_URL_RANDOM, {cache: 'no-store'})

	const data = await res.json()
	const quote = data.data[0]


  return (
    <>
    <section className='flex flex-col'>
        <ButtonRandomQuote />
      <main className="flex flex-col justify-center">
        <Quote quote={quote}/>
      </main>
    </section>
    </>
  )
}
