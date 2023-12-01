'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page7() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '2520') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part8');
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
        <source src="/scene-7to9-v3b.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">Question 7 (1.4)</h1>


        <p className="text-left max-w-3xl mx-auto mt-2">You don&apos;t remember much of the interaction, but you can vaguely recall him giving you his name. However, whenever you try recalling the name, your mind turns into a mess and it almost feels like the name is scrambled. You try your best to at least list out the letters in your journal:</p>
        <p className="text-left max-w-3xl mx-auto mt-2">
          First name: M I A I L L W<br />
          Last name: N O N H O J S
        </p>
        <p className="text-left max-w-3xl mx-auto mt-2">Looking at the letters in your notebook doesn&apos;t ring a bell. You decide that you have to try and unscramble it by brute force, and try every combination. Maybe if you see the name you would remember it. First however, you want to check to see if it even is possible by checking the total number of permutations of first names plus the total number of permutations of last names you can make with these letters.</p>
        
        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit#heading=h.dpsbtaw8a13b" target="_blank" className="text-blue-300 underline">Stuck? Here&apos;s a link to the solution</Link>
      </main>
    </>
  )
}