'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page8() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '16') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part9');
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
        <source src="/scene-10-v5.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">Question 8 (2.3)</h1>


        <p className="text-left max-w-3xl mx-auto mt-2">While building the time machine, you realize that you need to account for some likely ways things could go very wrong and build safety mechanisms for them:</p>
        <ol className="text-left max-w-3xl mx-auto pl-10 list-decimal">
          <li>A loss of power during time travel, resulting in the destruction of the time machine</li>
          <li>A failure of the time GPS, resulting in you being sent to the wrong time</li>
          <li>A glitch in the body scan, which would most likely result in only some part of you being sent back in time</li>
          <li>Instead of sending you through time, the machine might send time through you, which would have the effect of turning you into a baby, an elderly man, or anything in between.</li>
          <li>The time dilation adjustment might not work, meaning it takes you centuries or longer to travel back in time, so by the time you arrive, you&apos;re dead</li>
        </ol>
        <p className="text-left max-w-3xl mx-auto mt-2">You need to account for every way things could go wrong. Consider that multiple things go wrong (for example, you need to account for if just #2 goes wrong, and if #2 AND #3 go wrong, and if #2 AND #4 AND #5 go wrong, and every other case). The only exception to this is that if #1 goes wrong, then nothing else will go wrong (as the machine would be destroyed before any other issues occur).</p>
        <p className="text-left max-w-3xl mx-auto mt-2">How many ways could things go wrong?</p>
        
        
        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit#heading=h.n2zgouk1dhn3" target="_blank" className="text-blue-300 underline">Stuck? Here&apos;s a link to the solution</Link>
      </main>
    </>
  )
}