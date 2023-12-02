'use client';

import { useRef, useState } from 'react';
import './globals.css'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioEl = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  const toggleMusic = () => {
    if (isPlaying) {
      audioEl.current?.pause();
    } else {
      audioEl.current?.play();
      audioEl.current!.volume = 0.5;
    }
    setIsPlaying((isPlaying) => !isPlaying);
  };

  return (
    <html lang="en-CA">
      <body className="bg-black text-white flex flex-col">
        {children}
        <button className={clsx("mx-auto bg-purple-800 p-2 rounded", { 'hidden': pathname !== '/' })} onClick={toggleMusic}>Toggle Music</button>
        <audio ref={audioEl} src="/mystery-music.mp3" loop></audio>
      </body>
    </html>
  );
}
