"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

export default function GoToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed bottom-[-7px] flex w-full justify-center md:justify-end md:right-36 z-50"
      style={{
        transform:
          scrollY > 0
            ? `translateY(${Math.min(0, -40 - Math.min(-40, scrollY))}px)`
            : "translateY(40px)",
        transition: "transform 0.3s",
      }}
    >
      <Button
        variant={"link"}
        onClick={handleClick}
        className="group hover:no-underline"
      >
        <div className="w-[215px] h-[42px] bg-go-to-top bg-cover bg-center flex items-center justify-center">
          <div className="flex items-center justify-center mt-[-5px] gap-3">
            <div className="text-xs font-medium text-gray-600">
              Haut de page
            </div>
            <div>
              <ChevronUp className="mb-[1px] h-3.5 w-3.5 text-gray-600 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
}
