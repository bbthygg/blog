"use client";
import { Slider } from "@/app/components/Slider";
import { Trending } from "@/app/components/Trending";
import { Cards } from "@/app/components/Cards";
export default function Home() {
  return (
    <>

      <div className='w-full flex flex-col justify-center gap-10'>
        <Slider />
        <Trending />
        <Cards />
      </div>

    </>
  );
};