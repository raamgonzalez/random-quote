import React from 'react'
import getQuotes from '../services/getQuotes'

export default function SingleQuote() {

  const { _id, quoteText, quoteAuthor, quoteGenre } = getQuotes()

	console.log(quote)

	return (
		<div>{quoteText}</div>
	)
}
