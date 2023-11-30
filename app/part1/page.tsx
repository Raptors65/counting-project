'use client';

import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page1() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '120') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part2');
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
        <source src="/scene1to3-v3.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative h-screen pt-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold">Question 1 (2.4)</h1>
        <p className="max-w-3xl mx-auto mt-2">A few days passed, and you begin to feel really hungry. Never one to go without a plan however, you decide to make a meal plan before going out and gathering food. You’ve already made a quick survey of the land around the cabin, and have determined that the food you have access to and the food that you can create are as follows:</p>
        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('text-red-400 font-bold mt-2', { 'text-green-400': isCorrect })}>{errorMessage}</p>
      </main>
    </>
  )
}