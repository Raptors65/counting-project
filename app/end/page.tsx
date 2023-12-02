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
    if (answer === 'answer') {
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
        <source src="/scene-12-v3.mp4" type="video/mp4" />
      </video>
      <main className={clsx('text-center bg-black bg-opacity-80 text-white h-90 relative min-h-screen py-5', { hidden: !isDone })}>
        <h1 className="text-4xl font-bold mb-2">THE END</h1>

        <p className="text-left max-w-3xl mx-auto mt-2">Unfortunately, you failed to close the timeloop and the universe was destroyed.</p>
        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit" target="_blank" className="text-blue-300 underline block mb-5">Link to a document with additional background information, solutions, and references.</Link>


        <Link href="https://docs.google.com/document/d/1Gtpi36Zikg1gOdVGNA5AFEdcgMoRwDHzC84cF3g-y44/edit?usp=sharing" className="text-left max-w-3xl mx-auto mt-2 underline text-blue-300" target="_blank">Link to background and solutions</Link>
      </main>
    </>
  )
}