'use client'
import { getQuotes } from '../services/getQuotes.js'
import { useEffect, useState} from 'react'

export default function useQuotes() {

	const [quotes, setQuotes] = useState([])
	
	const [loading, setLoading] = useState(true)

	getQuotes().then(quote => setQuotes(quote))

	useEffect(function () {
		setLoading(true)
		getQuotes()
			.then(quote => {
				setQuotes(quote)
				setLoading(false)
			})
	},[setQuotes])

	return [quotes, loading]
}
