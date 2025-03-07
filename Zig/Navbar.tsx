export function Navbar() {
  return (
    <nav className="flex flex-wrap gap-8 justify-center items-center self-center px-12 max-w-full bg-white min-h-[114px] rounded-[80px] w-[1108px] max-md:px-5">
      <div className="flex gap-1.5 items-center self-stretch my-auto w-[170px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa989b7f2b983f722ba32b606734c251fbafec7ca4396a269b14c43f4139f9ac?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
          alt="Zigment Logo"
          className="object-contain self-stretch my-auto aspect-[4.26] w-[170px]"
        />
      </div>
      <div className="flex gap-5 items-center self-stretch my-auto text-base font-semibold leading-tight text-center text-black uppercase w-[198px]">
        <button className="gap-2.5 self-stretch px-11 py-5 my-auto bg-amber-300 rounded-full min-h-[60px] w-[198px] max-md:px-5">
          Get in touch
        </button>
      </div>
    </nav>
  );
}
