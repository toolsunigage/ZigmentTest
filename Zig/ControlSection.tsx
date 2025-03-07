export function ControlSection() {
  return (
    <section className="flex flex-col justify-center mt-32 w-full text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <h2 className="text-6xl text-black leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Be in Control of Your Website Engagement - All the Time
          </h2>
          <p className="mt-7 text-base leading-8 text-zinc-500 max-md:max-w-full">
            View, manage, and oversee every conversation from one unified
            dashboard.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center self-center mt-12 h-[490px] text-zinc-500 max-md:mt-10 max-md:max-w-full">
          {[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5c10c6dbc81352d2e09dcb70b092518b117c2ba418ffb092909a03a86d40d55?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Chat Performance",
              subtitle: "Real-time updates for every website conversation.",
              description:
                "Get a macro view of your site's overall engagement and a micro look at each visitor interaction.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97a8024ec56eb82552a0ecd1ea7d1b83317ff0c8f4e0f8942d9203409cad9808?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Sales Funnel Status",
              subtitle:
                "Watch each visitor progress through your lead funnel—live.",
              description:
                "Every chat conversation automatically updates with the correct sales status, ensuring you always know where in the piepeline your leads are.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa47b4c6067ed1db0a1292476fbc51f5b936f1ed68e0360a0a01782803093a1b?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
              title: "Conversation Summary",
              subtitle: "Detailed insights and closure advice for every lead",
              description:
                "Each conversation is recorded and synced to your CRM or contact center software, along with relevant tips to help your sales teams close deals more effectively.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center self-stretch my-auto bg-white rounded-2xl min-h-[495px] min-w-60 w-[379px]"
            >
              <div className="flex flex-col items-center max-w-full w-[323px]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="object-contain max-w-full aspect-[1.01] w-[119px]"
                />
                <h3 className="mt-4 text-2xl font-medium text-black">
                  {feature.title}
                </h3>
                <h4 className="mt-4 text-xl font-semibold leading-6">
                  {feature.subtitle}
                </h4>
                <p className="mt-4 text-base leading-6">
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
