import React from 'react'

export default function Quote({quote}) {


	return (
	<section className='flex gap-20 mt-20 h-full min-h-[700px]'>
		<div className='w-2 bg-yellow-500 blur-[1px]'/>
		<section className='grid items-center flex-col'>  
			<p className='text-5xl italic'>{`"${quote.quoteText}"`}</p>
			<p className='mt-5 align-start text-6xl'>{quote.quoteAuthor}</p>
		</section>
	</section>
	)
}
