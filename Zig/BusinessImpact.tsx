export function BusinessImpact() {
  return (
    <section className="flex flex-col justify-center self-center mt-32 max-w-full text-center min-h-[468px] w-[1405px] max-md:mt-10">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-6xl leading-none text-black max-md:max-w-full max-md:text-4xl">
          Real business impact
        </h2>
        <p className="self-center mt-5 text-lg font-light leading-7 text-zinc-500 max-md:max-w-full">
          Zigment delivers real value in the most critical metrics that matter
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-start self-center mt-8 max-md:max-w-full">
        {[
          {
            metric: "35%",
            description:
              "Higher lead conversion in the sales workflows, where deployed",
          },
          {
            metric: "85%",
            description:
              "Reduction in human resources while delivering the same throughput",
          },
          {
            metric: "12X",
            description: "ROI for the projects where it has been deployed",
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-start min-w-60 w-[270px]">
              <div className="text-8xl font-light leading-none text-black max-md:text-4xl">
                {item.metric}
              </div>
              <p className="text-base leading-8 text-zinc-500">
                {item.description}
              </p>
            </div>
            {index < 2 && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c50d2c6561384ec0b1ccc47dcf2d402e2ea1779fbee15083b30bf6c011433ab1?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
                alt="Divider"
                className="object-contain shrink-0 w-px aspect-[0]"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
