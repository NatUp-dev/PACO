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
            {Array.from({ length: 32 }).map((_, index) => (
              <CarouselItem key={index} className="basis-32">
                <Card className="rounded-xl shadow-md hover:bg-gray-100 cursor-pointer h-28 w-28">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <div>
                      <div className="text-xs text-gray-500">JUILLET 2023</div>
                      <div className="text-sm">
                        <span className="font-extrabold text-gray-700">
                          50000,00
                        </span>{" "}
                        € HT.
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
