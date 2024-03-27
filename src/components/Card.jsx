export const HomeCard = ({ title, description, icon }) => {
  return (
    <div class="relative min-w-72 w-full rounded-xl p-5 border-white border xsm:flex xsm:flex-col xsm:pl-11 xsm:p-3 md:pl-14 md:w-1/4 xl:pl-16 xl:w-2/5">
      <div class="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl -z-10"></div>
      <dt class="leading-7 text-gray-800 font-bold xsm:text-base md:text-xl xl:text-3xl">
        <div class="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 xsm:w-6 xsm:h-6 xsm:top-3 md:w-8 md:h-8 xl:w-10 xl:h-10">
          {icon}
        </div>
        {title}
      </dt>
      <dd
        class="mt-2 leading-7 text-gray-800 xsm:text-xs xsm:mt-1 md:text-sm xl:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div class="underline mt-3 mr-5 text-end font-bold cursor-pointer hover:text-indigo-500 xsm:text-xs md:text-sm xl:text-lg">
        ¡Quiero Ganar!
      </div>
    </div>
  );
};
