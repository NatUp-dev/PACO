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
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="p-0.5 ">
                  <Card className="rounded-xl shadow-md hover:bg-gray-100 cursor-pointer">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div>
                        <div className="text-xs text-gray-500">
                          JUILLET 2023
                        </div>
                        <div className="text-sm">
                          <span className="font-extrabold text-gray-700">
                            500,00
                          </span>{" "}
                          € HT.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
