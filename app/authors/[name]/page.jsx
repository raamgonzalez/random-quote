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
					<a className="mx-40 my-10 bg-slate-200 px-4 py-3 rounded-md shadow-md shadow-slate-300 hover:bg-slate-300 transition-all ease-in-out border border-gray-300" href="/">Back</a>
			</header>
			<main className="flex flex-col h-full w-full px-10 py-5 md:px-40 md:py-10 justify-center">
				<h1 className="text-left text-6xl ml-20">{author[0].quoteAuthor}</h1>
				<section className="mt-10 ml-20 flex flex-col gap-10">
					{
						author.map((quote) => (
						<div key={quote._id}>
							<h3 className="text-5xl italic">{`"${quote.quoteText}"`}</h3>
						</div>))
					}
				</section>
			</main>
		</section>
	)
}
