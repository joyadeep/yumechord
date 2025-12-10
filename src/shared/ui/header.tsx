import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-5">
      <h1>Header</h1>
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
