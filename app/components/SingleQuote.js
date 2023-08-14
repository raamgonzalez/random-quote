'use client'
import React from 'react'
import SymbolRandom from '../ui/SymbolRandom'
import Quote from './Quote'
import { useEffect, useState } from "react"

const API_URL_RANDOM = 'https://quote-garden.onrender.com/api/v3/quotes/random'


export default function SingleQuote() {
		
	const [quote, setQuote] = useState({})
	const [loading, setLoading] = useState(true)

	const getQuote = () => {
		setLoading(true)
		fetch(API_URL_RANDOM)
			.then( response => response.json())
			.then( data => {
				setQuote(data.data[0])
				setLoading(false)
			})
	}

	useEffect(() => {
		getQuote()
		}, [])


	return (

		<>
			<header className='self-end bg-slate-200 px-4 py-3 rounded-md shadow-md shadow-slate-300 hover:bg-slate-300 transition-all ease-in-out border border-gray-300'>
				<button onClick={() => getQuote()} className='flex gap-2 items-center self-end'>
					Random
					<SymbolRandom />
				</button>
			</header>
			<main className="flex flex-col w-full self-center">
				{	loading 
					? <p className='text-center mt-20 md:h-[600px] text-5xl italic'>Loading...</p> 
					:	<Quote quote={quote}/>
				}
			</main>
		</>
	)
}