'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page9() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '30240') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/end');
    } else {
      setErrorMessage('Incorrect answer!');
    }
  };

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <video autoPlay playsInline controls={!isDone} className="object-fit w-screen h-screen fixed top-0 left-0" onEnded={() => setIsDone(true)}>
        <source src="/scene-11.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">Question 9 (1.5)</h1>


        <p className="text-left max-w-3xl mx-auto mt-2">At the last minute, you decide to take your notebook with you and leave instructions inside in case you go amnesiac again. Your instructions are so long that you need to split them into 10 chapters:</p>
        <ul className="text-left max-w-3xl mx-auto list-disc pl-10">
          <li>Who you are</li>
          <li>The time loop situation - part 1</li>
          <li>The time loop situation - part 2</li>
          <li>How to survive in the woods</li>
          <li>Physics</li>
          <li>Calculus</li>
          <li>Electrical engineering</li>
          <li>How to build a time machine from scratch</li>
          <li>How to repair the time machine</li>
          <li>How to navigate the forest</li>
        </ul>
        <p className="text-left max-w-3xl mx-auto mt-2">The order doesn&apos;t matter EXCEPT for the following conditions:</p>
        <ul className="text-left max-w-3xl mx-auto list-disc pl-10">
          <li>&quot;The time loop situation - part 1&quot; must come before &quot;The time loop situation - part 2&quot;</li>
          <li>&quot;Physics&quot; and &quot;Calculus&quot; must come before &quot;Electrical engineering&quot;</li>
          <li>&quot;How to repair the time machine&quot; must come after &quot;How to build a time machine from scratch&quot;</li>
          <li>&quot;Who you are&quot; must be the first chapter</li>
        </ul>
        <p className="text-left max-w-3xl mx-auto mt-2">In how many ways can you arrange the chapters?</p>
        
        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit#heading=h.he8znk4dn5xz" target="_blank" className="text-blue-300 underline">Stuck? Here&apos;s a link to the solution</Link>
      </main>
    </>
  )
}