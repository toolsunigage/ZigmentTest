export function Architecture() {
  return (
    <section className="flex flex-col justify-center items-center self-center mt-32 max-w-full min-h-[572px] w-[1245px] max-md:mt-10">
      <div className="flex flex-col w-full text-center min-h-[101px]">
        <h2 className="text-6xl leading-none text-black max-md:max-w-full max-md:text-4xl">
          The Architecture That Powers Agentic AI
        </h2>
        <p className="self-center mt-5 text-base leading-8 text-zinc-500 max-md:max-w-full">
          Building on multiple LLMs, networked AI agents, and a flexible
          workflow console to transform every customer interaction.
        </p>
      </div>
      <div className="flex flex-wrap gap-7 justify-between items-center mt-12 max-w-full w-[1177px] max-md:mt-10">
        <div className="self-stretch my-auto min-w-60 w-[630px] max-md:max-w-full">
          <div className="flex flex-col justify-center items-center pr-4 pl-5 max-w-full border border-black border-dashed h-[399px] rounded-[36px] w-[624px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6bc8e27912f1c2f078c3ccde13dbb8d0622596ad9cd0bc923bc5ee626959cac?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
              alt="Architecture diagram"
              className="object-contain w-full aspect-[1.38]"
            />
          </div>
        </div>
        <div className="self-stretch my-auto w-7 min-h-[327px] rotate-[3.141592653589793rad] max-md:hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a4a624903c218cb05a58f4e70fc2f0261ad5e64de5b680dd730b35e8f7a2536?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
            alt="Connector 1"
            className="object-contain w-7 aspect-[1.56]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b83f57251ed49ca7f5dd80b86062ede8a7a774901b3e143bff4106e4a846a95?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
            alt="Connector 2"
            className="object-contain mt-36 w-7 aspect-[1.47] max-md:mt-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc411290ba83373dcf4b32f37fe9e067ca13e217292e5bf3423a86c9e61bb2b1?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
            alt="Connector 3"
            className="object-contain mt-36 w-7 aspect-[1.56] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col justify-center self-stretch my-auto text-base leading-7 h-[376px] min-w-60 text-stone-900 w-[462px] max-md:max-w-full">
          {[
            "Zigment's foundation blends top-tier Large Language Models (LLMs)—OpenAI, Claude, Meta Llama 2, Google Bard, and more—to choose the best AI for each task.",
            "Our Data & Integration layer houses specialized agents (Scheduler, Payment, Dialler, Qualify, Reminder, Follow-Up), working in sync to handle every interaction.",
            "Above it all, our Workflow Console unifies these agents for seamless, agentic AI use cases—no clunky flows, no coding headaches.",
          ].map((text, index) => (
            <div
              key={index}
              className="flex gap-4 items-start mt-12 first:mt-0 max-w-full w-[462px] max-md:mt-10"
            >
              <p className="px-5 py-2.5 bg-amber-300 rounded-3xl min-w-60 w-[462px] max-md:max-w-full">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
