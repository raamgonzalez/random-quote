async function getAuthors(author){
	const res = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}&limit=3`)
	const data = await res.json()
	return data.data
}

export default async function AuthorsPage({params}) {

	const author = await getAuthors(params.name)


	return (
		<section className="flex flex-col">
			<header className="flex w-full justify-end">
					<a className=" text-[#121212] bg-slate-200 px-4 py-3 rounded-md shadow-lg shadow-gray-800 hover:bg-slate-300 transition-all ease-in-out border border-gray-300" href="/">Back</a>
			</header>
			<main className="flex flex-col mt-20 h-full w-full justify-center">
				<div className="flex gap-2 md:gap-20">
					<div className='md:w-1 md:min-h-[500px] md:h-96 md:bg-yellow-500'/>
					<section>
						<h1 className="text-left text-4xl md:text-6xl">{author[0].quoteAuthor}</h1>
						<section className="mt-10 flex flex-col gap-5 md:gap-10">
							{
								author.map((quote) => (
								<div key={quote._id}>
									<h3 className="text-3xl md:text-5xl italic">{`"${quote.quoteText}"`}</h3>
								</div>))
							}
						</section>
					</section>
				</div>
			</main>
		</section>
	)
}
