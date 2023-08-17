'use client'
import React, { useTransition } from 'react'
import SymbolRandom from '../ui/SymbolRandom'
import { useRouter } from 'next/navigation'

export default function ButtonRandomQuote() {
	const [isPending, startTransition] = useTransition()

	const router = useRouter()

	return (
		<button 
		disabled={isPending}
		onClick={() => startTransition(router.refresh)}  
		className='flex gap-2 items-center self-end text-[#121212] px-4 py-3 bg-slate-200 px-4 py-3 rounded-md shadow-lg shadow-gray-800 hover:bg-slate-300 transition-all ease-in-out border border-gray-300' 
		>
			{isPending ? 'Loading...' : <SymbolRandom/> }
		</button>
	)
}
