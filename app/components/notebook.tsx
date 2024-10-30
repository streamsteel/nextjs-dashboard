// app/components/Notebook.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
});

const Notebook = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到底部
  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
  };

  // 页面加载时自动聚焦
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <textarea
      ref={textAreaRef}
      onChange={handleInput}
      className="h-full w-full resize-none border-none outline-none p-2 box-border text-base leading-loose ${inter.ClassName}"
      placeholder="Start typing your notes here..."
    />
  );
};

export default Notebook;
