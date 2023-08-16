'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import  SymbolPlus  from '../ui/SymbolPlus'


export default function Quote({quote}) {
	const router = useRouter()

	return (
	<section className='flex gap-20 mt-20 h-full min-h-[700px]'>
		<div className='w-2 bg-yellow-500 blur-[1px]'/>
		<section className='grid items-center flex-col'>  
			<p className='text-5xl italic'>{`"${quote.quoteText}"`}</p>
			<button onClick={() => router.push(`/authors/${quote.quoteAuthor}`)} className='w-fit flex gap-4 items-center mt-5 text-left text-6xl bg-slate-200 px-4 py-3 rounded-md shadow-md shadow-slate-300 hover:bg-slate-300 transition-all ease-in-out border border-gray-300'>
				<p className=''>{quote.quoteAuthor}</p>
				<SymbolPlus/>
			</button>
		</section>
	</section>
	)
}
