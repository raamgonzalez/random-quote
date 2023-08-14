'use client'
import React from 'react'
import useQuotes from '../hooks/useQuotes'

export default function SingleQuote() {

  const { quote, author, fetchQuote } = useQuotes()


  console.log(quote, author)
	return (
		<div>singleQuote</div>
	)
}
