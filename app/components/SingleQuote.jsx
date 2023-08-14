import React from 'react'
import { API_URL_RANDOM } from '../services/constants'
import NewQuote from './newQuote'


async function fetchQuotes() {
  const res = await fetch(API_URL_RANDOM)
  const data = await res.json()
  return data
}

export default async function SingleQuote() {

	const quote = await fetchQuotes()

	return (
		<main className='flex flex-col'>	
			<NewQuote/>
		</main>
	)
}
