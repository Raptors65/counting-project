'use client';

import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page2() {
  const [isDone, setIsDone] = useState(false);
  const { push } = useRouter();
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (answer === '3') {
      setIsCorrect(true);
      setErrorMessage('Correct!')
      push('/part3');
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
        <source src="/scene-4-v3.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">Question 2 (2.1)</h1>

        <p className="text-left max-w-3xl mx-auto mt-2">You see a question in the notebook:</p>

        <div className="bg-black border max-w-4xl mx-auto p-5 pt-2 mt-5">
          <p className="text-left max-w-3xl mx-auto mt-2">You have the following items:</p>
          <ul className="text-left max-w-3xl mx-auto list-disc pl-10">
            <li>backpack</li>
            <li>hammer</li>
            <li>wrench</li>
            <li>notebook</li>
            <li>aluminum water bottle</li>
            <li>steel ruler</li>
            <li>screwdriver</li>
            <li>dagger</li>
            <li>saw</li>
            <li>pliers</li>
            <li>tape measure</li>
            <li>crossbow</li>
            <li>knife</li>
          </ul>
          <p className="text-left max-w-3xl mx-auto mt-2">You want to separate these items into metal items, tools, and weapons. You suppose that:</p>
          <ul className="text-left max-w-3xl mx-auto list-disc pl-10">
            <li>The hammer, wrench, aluminum water bottle, steel ruler, screwdriver, dagger, saw, pliers, and knife are metal items.</li>
            <li>The hammer, wrench, steel ruler, screwdriver, saw, pliers, tape measure, and knife are tools.</li>
            <li>The dagger, crossbow, and knife are weapons.</li>
          </ul>

          <p className="text-left max-w-3xl mx-auto mt-2">How many items don&apos;t fit into multiple of these categories?</p>
        </div>

        <p className="text-left max-w-3xl mx-auto mt-5">This question was clearly left by the owner of the cabin. The question seems pointless but perhaps the solution can help you get some answers for your own situation. </p>

        <input className="mt-2 p-2 rounded text-black" type="text" placeholder="Answer" onChange={handleAnswerChange} />
        <button className="p-2 bg-green-700 ml-2 rounded hover:bg-green-600" onClick={handleSubmit}>Submit</button>
        <p className={clsx('font-bold mt-2')}>{errorMessage}</p>
      </main>
    </>
  )
}