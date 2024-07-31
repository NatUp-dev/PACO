import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CollecteNavigationLink({
  isActive,
  text,
  link,
}: {
  isActive: boolean;
  text: string;
  link: string;
}) {
  return (
    <>
      <Link
        className={cn(
          "px-4 py-2 ",
          isActive ? "text-blue-700" : "hover:bg-gray-50 hover:rounded-full"
        )}
        href={link}
      >
        {text}
      </Link>
      <div
        className={cn(
          "absolute w-full h-0.5 rounded-t-md bottom-0 mb-[-6px]",
          isActive && "bg-blue-600"
        )}
      ></div>
    </>
  );
}
