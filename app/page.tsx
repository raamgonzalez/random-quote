import Image from 'next/image'
import SingleQuote from './components/SingleQuote'


export default async function Home() {

  return (
    <main className="flex flex-col h-full w-full px-10 py-5  md:px-40 md:py-10 justify-center">
      <SingleQuote/>
    </main>
  )
}
