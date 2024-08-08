import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <span className="">Hello Paco !</span>
      <div>
        <Link href={"/demo"}>
          <Button size={"sm"} variant={"outline"}>
            Démo
          </Button>
        </Link>
      </div>
    </div>
  );
}
