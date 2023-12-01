'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page6() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '24') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part7');
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
        <source src="/scene-7to9-v3a.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">Question 6 (1.1)</h1>


        <p className="text-left max-w-3xl mx-auto mt-2">To take your mind off of things, you decide to think about the amount of ways you can take this walk.</p>
        <p className="text-left max-w-3xl mx-auto mt-2">You first take a left at an intersection with 3 branches, then go straight at an intersection with 2 branches, and then go straight again at an intersection with 4 branches. You know from previous walks that all branches lead to the same next intersection, (for example going right instead of left at the first intersection will still lead to the same intersection with 2 branches that you reached by going left initially. Same idea with every other branch and intersection). You ask yourself how many ways there are to reach the next intersection where all of the 4 branches at the earlier intersection would&apos;ve intersected.</p>
        
        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit#heading=h.b18t8itebjgq" target="_blank" className="text-blue-300 underline">Stuck? Here&apos;s a link to the solution</Link>
      </main>
    </>
  )
}