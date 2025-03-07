"use client";
export function ConversationDemo() {
  return (
    <section className="flex gap-10 justify-center items-center mt-24 w-full bg-white max-w-[1405px] min-h-[556px] rounded-[70px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto min-w-60 w-[1200px]">
        <div className="grow shrink self-stretch my-auto min-w-60 w-[613px] max-md:max-w-full">
          <h2 className="text-6xl text-black leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Leverage the true power of AI Agents
          </h2>
          <p className="mt-5 text-lg font-light leading-7 text-zinc-500 max-md:max-w-full">
            Not meaningfully engaging your leads immediately after they show
            interest results in lost leads
          </p>
        </div>
        <div className="flex flex-col justify-center self-stretch my-auto h-[376px] min-w-60 max-md:max-w-full">
          {[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/454226ca4b41203fbcb6ae08dbb56dd4bafd0de6df3f74504bccdefbbcd4c75c?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Engage Immediately",
              description:
                "Zigment's AI agents Instantly engage, nurture and drive sales motion with your leads",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46d6ffe681b0cf37a056f0a8c5c583d771a4eea2167e2b9b4d8a91b64351a190?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Respond Meaningfully",
              description:
                "Agents are trained to engage with empathy and truly help users in their journey",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad6e4f4e3a1264325e86680f645571ac637bba64dfe0a4b854f02c8518464b0f?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Qualify and Nurture Effectively",
              description:
                "AI agents qualify all your leads so that you focus only on the most relevant prospects",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 items-start mt-12 first:mt-0 max-md:mt-10 max-md:max-w-full"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="object-contain shrink-0 aspect-square w-[67px]"
              />
              <div className="min-w-60 w-[345px]">
                <h3 className="text-xl font-bold leading-none text-black">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-base leading-7 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
