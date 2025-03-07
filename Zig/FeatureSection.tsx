export function FeatureSection() {
  return (
    <section className="self-stretch mt-24 w-full bg-black max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-center px-16 py-32 w-full min-h-[1049px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0889fc29ed4ead0aae69b6a3cd0ba62f247f250f1cda80585d2d5b2c1d6fa1f5?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative items-center mb-0 w-full max-w-[1271px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col items-start self-stretch my-auto min-w-60 w-[698px] max-md:max-w-full">
            <h2 className="text-4xl leading-none text-center text-zinc-500 max-md:max-w-full">
              What's in it for the website visitor?
            </h2>
            <h3 className="self-stretch mt-10 text-6xl text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Website visitors get instant, intelligent, human-like support.
            </h3>
            <div className="mt-10 max-w-full min-h-[423px] w-[575px]">
              {[
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0614b35d7e0f5a4077b2afe9b9efa66a76e3172ef9f91913562e945ca3437bc2?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
                  title: "Instant Assistance",
                  description:
                    "Get answers the moment you need them, without navigating endless menus or waiting on hold.",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ac788e5ec1319421b45be69e556a7a7bd0503562fe6652ffd5cb1a2a86ec051?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
                  title: "Personalized Interactions",
                  description:
                    "Enjoy conversations that adapt to your questions and preferences, making the experience feel genuinely helpful.",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ee0ea907bea0db3b1f80b88485c1eb7af94d3179c97fc5b387a2bb53c659e1e?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
                  title: "Frictionless Journey",
                  description:
                    "Move smoothly from curiosity to checkout, with each step guided by smart, friendly AI.",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ee0ea907bea0db3b1f80b88485c1eb7af94d3179c97fc5b387a2bb53c659e1e?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
                  title: "Always-On Support",
                  description:
                    "Day or night, you're never left waiting—Zigment is available 24/7 to help you make informed decisions.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start mt-8 first:mt-0"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="object-contain shrink-0 aspect-square w-[67px]"
                  />
                  <div className="min-w-60 w-[539px] max-md:max-w-full">
                    <h4 className="text-xl font-bold leading-none text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-2.5 text-base text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7ddaf8499a8779d26d6076ce36d3582152a5e407e630b9e15e6d5c280839eb?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
            alt="Feature demonstration"
            className="object-contain self-stretch my-auto rounded-lg aspect-[1.19] min-w-60 shadow-[0px_24px_80px_rgba(0,0,0,0.15)] w-[967px] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
