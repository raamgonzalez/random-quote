'use client'
import React from 'react'
import SymbolRandom from '../ui/SymbolRandom'
import { useRouter } from 'next/navigation'

export default function ButtonRandomQuote() {

	const router = useRouter()

	return (
		<button onClick={router.refresh}  className='flex gap-2 items-center self-end'>
			Random
			<SymbolRandom />
		</button>
	)
}
