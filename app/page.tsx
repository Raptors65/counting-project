import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-2xl">Time Travel Story</h1>
      <p>Backstory blah blah blah</p>
      <Link className="bg-green-700 p-2 rounded inline-block" href="/part1">Start</Link>
    </main>
  )
}
