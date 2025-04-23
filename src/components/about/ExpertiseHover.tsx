
import React, { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Book } from "lucide-react";

const EXPERTISE = [
  "Monopoles & Transmission Towers",
  "Substation Structures",
  "Pipe Structures & Power Distribution",
  "Solar Module Mounting",
  "Telecom & Infrastructure",
];

export default function ExpertiseHover({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setOpen(true);
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % EXPERTISE.length);
      setOpen(false);
      setTimeout(() => setOpen(true), 200); // quick close/reopen for animation
    }, 2500);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <span className="inline-block cursor-pointer font-semibold text-primary text-2xl relative hover-scale transition-all duration-300">
          <Book size={22} className="inline mr-2 mb-1" />
          {title}
        </span>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="animate-fade-in text-base font-medium">
        <span>{EXPERTISE[current]}</span>
      </PopoverContent>
    </Popover>
  );
}
