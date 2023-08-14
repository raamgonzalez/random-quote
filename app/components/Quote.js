import React from 'react'

export default function Quote({quote}) {


	return (
	<section className='flex gap-10 mt-20 md:h-[800px]'>
		<div className='w-1 bg-yellow-500'/>
		<section className='grid items-center flex-col'>  
			<p className='text-5xl italic'>{`"${quote.quoteText}"`}</p>
			<p className='mt-5 align-start text-6xl bold'>{quote.quoteAuthor}</p>
		</section>
	</section>
	)
}
