"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-5">
      Enter chords here
      <div className="flex gap-1 rounded-xl p-2">
        <section className=" flex-1">
          <Textarea
            rows={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="resize-none h-96 whitespace-pre"
          />
        </section>
        <section className="flex-1 rounded-xl overflow-hidden">
          <pre className=" p-2 h-96 overflow-y-auto  bg-gray-100">{text}</pre>
        </section>
      </div>
    </div>
  );
};

export default page;
