import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-5 mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold">Tripping and Travelling Through Time</h1>
      <div className="text-sm mt-2 font-bold">Andy Chai and Lucas Kim - MDM4UP - December 1, 2023</div>
      <p className="my-4">Note that you won&apos;t be able to toggle the music once you click start.</p>
      <p className="my-4">Whenever a video plays, the next question will show up automatically once you reach the end of the video.</p>
      <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit" target="_blank" className="text-blue-300 underline block mb-5">Link to a document with additional background information, solutions, and references.</Link>

      <Link className="bg-green-700 p-2 rounded inline-block" href="/part1">Start</Link>
    </main>
  )
}
