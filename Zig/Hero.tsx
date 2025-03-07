export function Hero() {
  return (
    <section className="flex items-start mt-24 w-full font-semibold text-white max-md:pr-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-auto items-end self-end mt-16 mr-0 max-md:mt-10 max-md:max-w-full">
        <div className="min-h-[499px] min-w-60 w-[650px]">
          <h1 className="text-6xl leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Meet Zigment, A New Way
            <br />
            To Start Better Conversations.
            <br />
          </h1>
          <h2 className="mt-6 text-3xl max-md:max-w-full">
            Marketers, you deserve better.
          </h2>
          <p className="mt-6 text-lg font-light leading-7 text-gray-100 max-md:max-w-full">
            Transform your website experience with real-time, agentic,
            conversational AI that delights visitors and drives conversions—no
            clunky chatbots, no wasted leads.
            <br />
          </p>
          <button className="gap-2.5 self-stretch py-4 pr-8 pl-8 mt-6 max-w-full text-xl leading-none text-center text-black uppercase bg-amber-300 min-h-[47px] rounded-[9334.593px] w-[198px] max-md:px-5">
            book a demo
          </button>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c56ec55e948e6363f530a8e68ffff5d00c0cc17e9a546c37461bcdd1297991b2?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
        alt="Hero illustration"
        className="object-contain shrink-0 self-start max-w-full aspect-[0.49] w-[194px]"
      />
    </section>
  );
}
