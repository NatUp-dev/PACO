"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    //scroo to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    visible && (
      <Button
        variant={"link"}
        onClick={handleClick}
        style={{ animation: visible ? "fadeIn 0.5s" : "fadeOut 0.5s" }}
        className="group"
      >
        <div className="w-[215px] h-[42px] bg-go-to-top bg-cover bg-center flex items-center justify-center fixed bottom-[-10px] right-40">
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
    )
  );
}
