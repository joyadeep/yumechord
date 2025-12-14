import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h2 className="text-lg font-semibold">Singers</h2>
      <Button className="rounded-full cursor-pointer ml-auto">
        <Plus /> Add Button
      </Button>
    </div>
  );
};

export default page;
