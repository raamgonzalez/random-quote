import Image from 'next/image'
import SingleQuote from './components/SingleQuote'


export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen px-40 py-10">
      <SingleQuote/>
    </main>
  )
}
