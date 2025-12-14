"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchame = z.object({
  title: z.string().min(1, { error: "Title is required" }),
  singer: z.string().min(1, { error: "Singer is required" }),
  chord: z.string().min(1, { error: "Chord is required" }),
  key: z.string().optional(),
  instrument: z.string().min(1, { error: "Instrument is required" }),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchame>>({
    resolver: zodResolver(formSchame),
    defaultValues: {
      title: "",
      singer: "",
      chord: "",
      key: "",
      instrument: "",
    },
  });
  const watchedChord = useWatch({
    control: form.control,
    name: "chord",
  });
  const onSubmit = (data: z.infer<typeof formSchame>) => {
    console.log("values", data);
  };
  return (
    <div className="p-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-5"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="singer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Singer</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instrument"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instrument</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chord"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Chord</FormLabel>
                <FormControl>
                  <div className="flex gap-5">
                    <section className=" flex-1">
                      <Textarea
                        rows={50}
                        className="resize-none h-96 whitespace-pre"
                        {...field}
                      />
                    </section>
                    <section className="flex-1 rounded-xl overflow-hidden">
                      <pre className=" p-2 h-96 overflow-y-auto  bg-gray-100">
                        {watchedChord}
                      </pre>
                    </section>
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="col-span-2 flex justify-end">
            <Button className="w-fit px-10 cursor-pointer">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
