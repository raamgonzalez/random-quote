'use client'
import { useEffect, useState } from 'react'
import SymbolRandom from '../ui/SymbolRandom'
const API_URL_RANDOM = 'https://quote-garden.onrender.com/api/v3/quotes/random'


async function fetchQuotes() {
  const res = await fetch(API_URL_RANDOM, { cache: 'no-store' })
  const data = await res.json()
  return data
}


export default  function SingleQuote() {
	const [quotes, setQuotes] = useState(null)


	useEffect(() => {
		async function getQuotes() {
			const quotesFromServer = await fetchQuotes()
			setQuotes(quotesFromServer)
		}
		getQuotes()
	}, [])



	return (
		<div>
			<header className='self-end'>
        <button className='flex gap-2 items-center self-end'>
          Random
          <SymbolRandom/>
        </button>
      </header>
			<main className="flex flex-col min-h-screen px-10 py-5  md:px-40 md:py-10">
				<SingleQuote/>
				<section className='flex gap-10 mt-20'>
					<div className='w-1 md:h-[600px] bg-yellow-500'/>
					<section className='grid items-center flex-col'>
						{/* <p className='text-5xl italic'>{`"${quotes.quoteText}"`}</p>
						<p className='mt-5 align-start text-6xl bold'>{quotes.quoteAuthor}</p> */}
					</section>
				</section>
			</main>
		</div>
	)
}

