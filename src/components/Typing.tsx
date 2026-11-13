"use client";

import { useEffect, useState } from "react";

// Types and deletes each word in turn. Decorative: the heading carries the full text for screen readers.
export function Typing({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let length = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        length -= 1;
        if (length === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      } else {
        length += 1;
        if (length === words[word].length) deleting = true;
      }
      setText(words[word].slice(0, length));
      const pause = length === words[word].length ? 1900 : deleting ? 35 : 75;
      timer = setTimeout(tick, pause);
    };

    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span aria-hidden="true">
      {text}
      <span className="caret" />
    </span>
  );
}
