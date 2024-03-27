import twitterIcon from "@/images/icons/twitter.svg";
import instagramIcon from "@/images/icons/instagram.svg";
import yotubeIcon from "@/images/icons/youtube.svg";
import tiktokIcon from "@/images/icons/tik-tok.svg";

export const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 w-full bg-white/60 backdrop-blur-sm rounded p-3 xsm:flex xsm:flex-col xsm:items-center xsm:justify-center xsm:gap-2">
      <div class="flex gap-3">
        <a href="https://twitter.com/tu1millon?lang=eu" target="_blank">
          <img
            src={twitterIcon.src}
            alt="twitter icon"
            class="xsm:w-6 xsm:h-6 md:w-8 md:h-8 bg-indigo-500 rounded p-1"
          />
        </a>
        <a href="https://www.instagram.com/tu1millon/?hl=es" target="_blank">
          <img
            src={instagramIcon.src}
            alt="twitter icon"
            class="xsm:w-6 xsm:h-6 md:w-8 md:h-8 bg-indigo-500 rounded p-1"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCqPp4Wd4c7q-4AarvfI6ueA"
          target="_blank"
        >
          <img
            src={yotubeIcon.src}
            alt="twitter icon"
            class="xsm:w-6 xsm:h-6 md:w-8 md:h-8 bg-indigo-500 rounded p-1"
          />
        </a>
        <a href="https://www.tiktok.com/@tu1millon" target="_blank">
          <img
            src={tiktokIcon.src}
            alt="twitter icon"
            class="xsm:w-6 xsm:h-6 md:w-8 md:h-8 bg-indigo-500 rounded p-1"
          />
        </a>
      </div>
      <div class="flex gap-3 md:gap-5">
        <p class="text-gray-800 font-bold xsm:text-xs md:text-base">
          © 2024 TU1MILLON
        </p>
        <p class="text-gray-800 font-bold xsm:text-xs md:text-base underline">
          Terms of use
        </p>
        <p class="text-gray-800 font-bold xsm:text-xs md:text-base underline">
          Privacy policy
        </p>
      </div>
    </footer>
  );
};
