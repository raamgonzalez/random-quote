import { API_URL_RANDOM } from "./settings";

const fromApiResponseToQuotes = (apiResponse) => {
	const { data } = apiResponse;
	if (Array.isArray(data)){
		const quotes = data.map((quote) => {
			const { _id, quoteText, quoteAuthor, quoteGenre } = quote;
			return { _id, quoteText, quoteAuthor, quoteGenre };
		})
		return quotes
	}

	return []
}


export default function getQuotes() {
	return fetch(API_URL_RANDOM)
		.then(res => res.json())
		.then(fromApiResponseToQuotes)
}