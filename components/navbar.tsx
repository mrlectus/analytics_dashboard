"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { SVGArrowDown, SVGBell, SVGCalender, SVGSearch } from "./icons/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
export const NavBar = () => {
  const [date, setDate] = React.useState<Date | undefined>(() => new Date());
  return (
    <nav className="h-[66px] dark:bg-black flex justify-between items-center border bg-[#FDFDFD] w-full">
      <div className="m-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <div className="flex items-center gap-4 mx-2">
        <div className="relative flex items-center">
          <SVGSearch className="absolute ml-2 dark:fill-black" />
          <Input
            placeholder="search..."
            className="ring-0 pl-8 dark:placeholder:text-black dark:text-black focus:border-none h-8 rounded-full outline-none bg-white focus-visible:ring-0"
          />
        </div>
        <div className="hidden md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start h-8 gap-2 text-left font-normal border-none",
                  !date && "text-muted-foreground"
                )}
              >
                <SVGCalender />
                {date ? (
                  format(date, "MMMM dd, yyyy")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="rounded-full border p-1 hidden md:flex">
          <SVGBell />
        </div>
        <div className="flex gap-1 items-center rounded-full p-2 border">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs text-center md:flex flex-col hidden">
            <span className="font-bold">Justin Bergson</span>
            <span>justin@gmail.com</span>
          </div>
          <SVGArrowDown className="hidden md:flex" />
        </div>
      </div>
    </nav>
  );
};
