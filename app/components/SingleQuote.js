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

		

    <main className="flex flex-col min-h-screen px-10 py-5  md:px-40 md:py-10">
      <header className='self-end'>
        <button onClick={() => getQuote()} className={`flex gap-2 items-center self-end`}>
          Random
          <SymbolRandom />
        </button>
      </header>
			{	loading 
				? <p className='text-center mt-60'>Loading...</p> 
				:	<Quote quote={quote}/>
			}
    </main>
	)
}