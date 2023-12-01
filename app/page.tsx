import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-5 mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold">Time Travel Story</h1>
      <p className="my-4">Note that you won&apos;t be able to toggle the music once you click start.</p>
      <p className="my-4">Whenever a video plays, the next question will show up automatically once you reach the end of the video.</p>
      <Link className="bg-green-700 p-2 rounded inline-block" href="/part1">Start</Link>
    </main>
  )
}
