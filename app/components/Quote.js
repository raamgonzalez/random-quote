'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import  SymbolPlus  from '../ui/SymbolPlus'


export default function Quote({quote}) {
	const router = useRouter()

	return (
	<section className='flex gap-1 md:gap-20 mt-20 h-full md:min-h-[700px]'>
		<div className='md:w-1 md:bg-yellow-500'/>
		<section className='grid items-center flex-col'>  
			<p className='text-3xl md:text-5xl italic'>{`"${quote.quoteText}"`}</p>
			<button onClick={() => router.push(`/authors/${quote.quoteAuthor}`)} className='text-[#121212] w-full flex gap-4 place-items-center items-center mt-10 md:mt-5 text-left md:text-6xl bg-slate-200 px-4 py-3 rounded-md shadow-lg shadow-gray-800 hover:bg-slate-300 transition-all ease-in-out border border-gray-300'>
				<p>{quote.quoteAuthor}</p>
				<SymbolPlus/>
			</button>
		</section>
	</section>
	)
}
