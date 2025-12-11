"use client";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="p-5">
      Enter chords here
      <div className="flex rounded-xl p-2">
        <section className=" flex-2">
          <Textarea rows={50} className="resize-none h-96" />
        </section>
        <section>Preview</section>
      </div>
    </div>
  );
};

export default page;
