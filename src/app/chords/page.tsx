"use client";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Chords = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [speed, setSpeed] = useState(5);
  const scrollToBottom = () => {
    setIsScrolling((preval) => !preval);
  };

  const updateSpeed = (speed: number) => {
    setSpeed(speed);
  };

  useEffect(() => {
    if (isScrolling) {
      const scroll = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += speed;

          // Stop if reached bottom
          if (
            scrollRef.current.scrollTop >=
            scrollRef.current.scrollHeight - scrollRef.current.clientHeight
          ) {
            setIsScrolling(false);
            return;
          }
        }
        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling, speed]);

  return (
    <div className="p-5">
      <section className="flex gap-3">
        <Button
          className="rounded-full cursor-pointer"
          onClick={scrollToBottom}
        >
          {isScrolling ? <Pause /> : <Play />} AutoScroll
        </Button>
        <Button
          className="rounded-full cursor-pointer"
          onClick={() => updateSpeed}
        >
          Speed
        </Button>
      </section>
      <h1 className="font-semibold text-xl">Chords</h1>
      <div ref={scrollRef} className="h-96">
        <pre>
          Verse
          <p className="font-bold">C Em</p>
          birisyeu hola nasamjhiyekai bes
          <p> F Dm</p>
          samjhana ko bojh marera k lanu
          <p className="font-bold"> G C Em</p>
          haso rittiye aashu ko k dosh
          <p className="font-bold"> F C</p>
          sapana sabai ekchin mai biljhiye
          <p>Chorus</p>
          <p className="font-bold">C Em</p>
          birisyeu hola nasamjhiyekai bes
          <p> F Dm</p>
          samjhana ko bojh marera k lanu
          <p className="font-bold"> G C Em</p>
          haso rittiye aashu ko k dosh
          <p className="font-bold"> F C</p>
          sapana sabai ekchin mai biljhiye
          <p>Chorus</p>
          <p className="font-bold">C Em</p>
          birisyeu hola nasamjhiyekai bes
          <p> F Dm</p>
          samjhana ko bojh marera k lanu
          <p className="font-bold"> G C Em</p>
          haso rittiye aashu ko k dosh
          <p className="font-bold"> F C</p>
          sapana sabai ekchin mai biljhiye
          <p>Chorus</p>
          <p className="font-bold">C Em</p>
          birisyeu hola nasamjhiyekai bes
          <p> F Dm</p>
          samjhana ko bojh marera k lanu
          <p className="font-bold"> G C Em</p>
          haso rittiye aashu ko k dosh
          <p className="font-bold"> F C</p>
          sapana sabai ekchin mai biljhiye
          <p>Chorus</p>
        </pre>
      </div>
      {/* <div ref={scrollRef}></div> */}
    </div>
  );
};

export default Chords;
