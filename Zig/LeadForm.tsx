export function LeadForm() {
  return (
    <form className="flex flex-col justify-center items-center px-8 py-5 mt-14 ml-3 w-full text-base leading-none bg-stone-900 bg-opacity-30 min-h-[86px] rounded-[50px] text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-7 justify-between items-center w-full max-w-[1337px] max-md:max-w-full">
        <p className="self-stretch my-auto text-lg font-light text-white w-[402px]">
          Fill out the form and discover the magic.
        </p>
        <input
          type="text"
          placeholder="Name"
          className="gap-2 self-stretch px-2 py-3 my-auto text-center bg-gray-50 min-h-[46px] rounded-[46.154px] w-[230px]"
        />
        <input
          type="tel"
          placeholder="Number"
          className="gap-2 self-stretch px-2 py-3 my-auto text-center bg-gray-50 min-h-[46px] rounded-[46.154px] w-[230px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="gap-2 self-stretch px-2 py-3 my-auto text-center bg-gray-50 min-h-[46px] rounded-[46.154px] w-[230px]"
        />
        <button
          type="submit"
          className="gap-2 self-stretch px-10 py-4 my-auto font-semibold leading-none text-center text-black uppercase whitespace-nowrap bg-amber-300 min-h-[47px] rounded-[7691.539px] w-[135px] max-md:px-5"
        >
          submit
        </button>
      </div>
    </form>
  );
}
