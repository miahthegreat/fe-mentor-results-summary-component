import Head from "next/head";
import Reaction from "@/icons/Reaction";
import Memory from "@/icons/Memory";
import Verbal from "@/icons/Verbal";
import Visual from "@/icons/Visual";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen md:mx-auto md:max-w-2xl md:content-center md:items-center md:justify-center">
        <div className="grid md:grid-cols-2 md:content-center md:items-center md:justify-center md:rounded-3xl md:bg-white md:shadow-sm">
          <div className="to-[hsl(241,81%,54%) grid gap-8 rounded-b-2xl bg-gradient-to-t from-[hsl(241,81%,54%)] to-[hsl(252,100%,67%)] px-12 py-12 md:max-w-lg md:content-center md:justify-center md:rounded-3xl">
            <h1 className="text-center text-xl font-bold text-[hsl(251,100%,87%)]">
              Your Result
            </h1>
            <div className="mx-auto flex aspect-square w-40 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]">
              <span className="text-6xl font-bold text-white">76</span>
              <span className="text-gray-400">of 100</span>
            </div>
            <div className="grid content-center items-center justify-center gap-4 text-center">
              <p className="text-3xl text-white">Great</p>
              <p className="max-w-[17rem] text-base text-[hsl(251,100%,87%)]">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="grid gap-4 px-8 py-4">
            <h2 className="text-lg font-bold md:text-xl">Summary</h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg bg-[hsla(355,45%,62%,0.1)] p-4">
                <div className="flex items-center gap-2 text-[hsla(355,45%,62%,1)]">
                  <Reaction />
                  <span>Reaction</span>
                </div>
                <div>
                  <span>80</span>
                  <span className="text-[hsl(340,5%,65%)]"> / 100</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[hsla(39,67%,63%,0.1)] p-4">
                <div className="flex items-center gap-2 text-[hsl(39,67%,63%)]">
                  <Memory />
                  <span>Memory</span>
                </div>
                <div>
                  <span>92</span>
                  <span className="text-[hsl(340,5%,65%)]"> / 100</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[hsla(164,45%,41%,0.1)] p-4">
                <div className="flex items-center gap-2 text-[hsl(164,45%,41%)]">
                  <Verbal />
                  <span>Verbal</span>
                </div>
                <div>
                  <span>61</span>
                  <span className="text-[hsl(340,5%,65%)]"> / 100</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[hsla(241,56%,42%,0.1)] p-4">
                <div className="flex items-center gap-2 text-[hsl(241,56%,42%)]">
                  <Visual />
                  <span>Visual</span>
                </div>
                <div>
                  <span>72</span>
                  <span className="text-[hsl(340,5%,65%)]"> / 100</span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-full bg-[hsla(224,30%,27%,1)] p-4 text-white transition-colors duration-200 ease-in hover:bg-[hsla(224,30%,27%,0.9)]">
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
