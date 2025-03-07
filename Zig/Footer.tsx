export function Footer() {
  return (
    <footer className="flex flex-col items-center pt-16 pb-9 w-full bg-black max-w-[1608px] min-h-[470px] mt-[1068px] rounded-[30px_30px_0px_0px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap items-start max-w-full text-white w-[1404px]">
        <div className="text-base leading-8 text-gray-100 min-w-60 w-[367px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7dcdaba17ec672c4cf45a7d1d03696b442028c60439a5b831dcab10bc19f922?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
            alt="Zigment Logo"
            className="object-contain max-w-full aspect-[4.31] w-[241px]"
          />
          <p className="mt-8 max-md:max-w-full">
            The AI-Native Sales Engagement Platform
          </p>
        </div>
        <nav className="flex flex-col justify-center items-start w-[168px]">
          <h3 className="max-w-full text-3xl leading-none whitespace-nowrap h-[30px] w-[206px]">
            Resources
          </h3>
          <ul className="mt-8 max-w-full text-lg font-light leading-loose w-[206px]">
            {["Blogs & Ebooks", "Integrations", "Tools", "Demos", "Login"].map(
              (item, index) => (
                <li key={index} className="w-full leading-7 min-h-[30px]">
                  <a href="#" className="hover:text-amber-300">
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
        <nav className="flex flex-col justify-center items-start w-[168px]">
          <h3 className="max-w-full text-3xl leading-none whitespace-nowrap h-[30px] w-[207px]">
            Company
          </h3>
          <ul className="mt-8 max-w-full text-lg font-light leading-7 w-[207px]">
            {[
              "About Us",
              "Careers",
              "Terms of Service",
              "Privacy Policy",
              "Refund And Policy",
              "Contact Us",
            ].map((item, index) => (
              <li key={index} className="w-full min-h-[30px]">
                <a href="#" className="hover:text-amber-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="mt-12 max-w-full min-h-0 bg-zinc-500 border-zinc-500 w-[1404px] max-md:mt-10" />
      <div className="flex flex-wrap gap-10 justify-between mt-12 max-w-full w-[1404px] max-md:mt-10">
        <div className="flex gap-6 items-center my-auto">
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/bc03b3b1bb2ee451f5c94bce4b4650ce832ff03e793f8ac9544aebcb0b5a94bd?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/070d9085e1c7169ac16c21339057b593e5f9d2b90e99ac500d0e32f419351a45?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5c82e71fc9438de0468944c96bedaadb49cfea509843a9793b9e3d5d128cd71d?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d34cadd84c327f50790af5efe79144b0ca5d561a134752e04fa1ac46882de6a9?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e8107b15e76ef9635ddf7c257ebad00da50a2307c0f76d99f5501ff5f4bfe9c0?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0",
          ].map((url, index) => (
            <a key={index} href="#" className="hover:opacity-80">
              <img
                src={url}
                alt={`Social media ${index + 1}`}
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </a>
          ))}
        </div>
        <p className="text-lg font-light leading-loose text-white min-w-60 w-[423px] max-md:max-w-full">
          © Copyright 2024, All Rights Reserved | Zigment.ai
        </p>
      </div>
    </footer>
  );
}
