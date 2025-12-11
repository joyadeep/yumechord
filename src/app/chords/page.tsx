"use client";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Chords = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const animationRef = useRef<number>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [_speed, setSpeed] = useState(5);

  //   const scrollToRefSlow = (target, speed = 0.5) => {
  //   // speed = pixels per frame (2–5 is slow, 10+ is fast)

  //   const targetY = target.getBoundingClientRect().top + window.scrollY;

  //   const step = () => {
  //     const currentY = window.scrollY;
  //     const distance = targetY - currentY;

  //     console.log("currentY", currentY);
  //     console.log("distance", distance)

  //     // Already there (or within 1px)
  //     if (Math.abs(distance) <= 1) {
  //       window.scrollTo(0, targetY);
  //       return;
  //     }

  //     // Move in correct direction by 'speed' pixels
  //     const direction = distance > 0 ? 1 : -1;
  //     window.scrollTo(0, currentY + direction * speed);

  //     requestAnimationFrame(step);
  //   };

  //   requestAnimationFrame(step);
  // };

  const scrollToBottom = () => {
    setIsScrolling((preval) => !preval);
    if (scrollRef.current) {
      // scrollToRefSlow(scrollRef.current);
    }
  };

  const updateSpeed = (speed: number) => {
    console.log(speed);
    setSpeed(speed);
  };

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
      <div className="">
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
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Chords;
