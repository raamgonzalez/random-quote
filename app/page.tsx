import Quote from './components/Quote'
import ButtonRandomQuote from './components/ButtonRandomQuote'
const API_URL_RANDOM = 'https://quote-garden.onrender.com/api/v3/quotes/random'





export default async function Home() {
  const res = await fetch(API_URL_RANDOM, {cache: 'no-store'})

	const data = await res.json()
	const quote = data.data[0]


  return (
    <>
    <header className='self-end bg-slate-200 px-4 py-3 rounded-md shadow-md shadow-slate-300 hover:bg-slate-300 transition-all ease-in-out border border-gray-300'>
      <ButtonRandomQuote />
    </header>
      <main className="flex flex-col h-full w-full px-10 py-5 md:px-40 md:py-10 justify-center">
        <Quote quote={quote}/>
      </main>
    </>
  )
}
