import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";

export default function Carousels() {
  return (
    <Card className="bg-gray-50">
      <CardHeader>
        <CardTitle>Carousel</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {Array.from({ length: 45 }).map((_, index) => (
              <CarouselItem key={index} className="basis-auto">
                <Card className="rounded-xl shadow-md hover:bg-gray-100 cursor-pointer h-28 w-28">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                    <div className="">
                      <div className="text-xs text-gray-500 text-center">
                        JUILLET 2023
                      </div>
                      <div className="text-sm text-center">
                        <span className="font-extrabold text-gray-700">
                          93 918,96
                        </span>{" "}
                        <span className="text-xs">€ HT.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
