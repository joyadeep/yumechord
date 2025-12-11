import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-5 border-b">
      <Image
        src="/images/logo.webp"
        width={52}
        height={52}
        alt="logo"
        className="object-contain"
      />
      <div className="flex gap-2">
        <Button variant="outline" className="cursor-pointer">
          Login
        </Button>
        <Button className="cursor-pointer">SignUp</Button>
      </div>
    </header>
  );
};

export default Header;
