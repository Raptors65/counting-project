'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page3() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '13') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part4');
    } else {
      setErrorMessage('Incorrect answer!');
    }
  };

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <img className="object-fit w-screen h-screen fixed top-0 left-0" src="/scene-4-end-frame.png"  />
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5')}>
        <h1 className="text-4xl font-bold mb-2">Question 3 (2.4)</h1>

        <p className="text-left max-w-3xl mx-auto mt-2">You note down the answer to the previous question. On the next page of the notebook, there is another question.</p>

        <div className="bg-black border max-w-4xl mx-auto p-5 pt-2 mt-5">
          <p className="text-left max-w-3xl mx-auto mt-2">You have another set of items that you want to organize into wool-based items, flammable items, and dyed items. There are too many items to list individually. This is what you know there are:</p>
          <ul className="text-left max-w-3xl mx-auto list-disc pl-10">
            <li>There are at most 83 items that are wool-based, flammable, or dyed</li>
            <li>41 items that are wool-based</li>
            <li>50 items that are flammable</li>
            <li>39 items that are dyed</li>
            <li>23 items that are wool-based and flammable</li>
            <li>18 items that are wool-based and dyed</li>
            <li>19 items that are flammable and dyed</li>
          </ul>
          <p className="text-left max-w-3xl mx-auto mt-2">At most, how many items can be wool-based, flammable, and dyed?</p>
        </div>

        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit#heading=h.4dm6n49iw5sw" target="_blank" className="text-blue-300 underline">Stuck? Here&apos;s a link to the solution</Link>
      </main>
    </>
  )
}