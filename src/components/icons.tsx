import meLogo from "../icon/skul.svg";
import zustandLogo from "../icon/zustand.svg";
import tailwindLogo from "../icon/tailwind-svgrepo-com.svg";
import shadcnLogo from "../icon/Shadcn.svg";
import zodLogo from "../icon/Zod.svg";
import i18nextLogo from "../icon/inext_logo_icon_248054.svg";
import tanstackLogo from "../icon/tanstack-logo-black.svg";




const Icons = () => {
  return (
    <div className="my-auto w-full flex items-center justify-center bg-gray-100">
      <a href="https://github.com/veronbenli-front" target="_blank">
        <img src={meLogo} className="my_logo_class" alt="me logo" />
      </a>
      <a href="https://zustand-demo.pmnd.rs/" target="_blank">
        <img src={zustandLogo} className="my_logo_class" alt="Zustand logo" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src={tailwindLogo} className="my_logo_class" alt="Tailwind logo" />
      </a>
      <a href="https://ui.shadcn.com/" target="_blank">
        <img src={shadcnLogo} className="my_logo_class" alt="Shadcn logo" />
      </a>
      <a href="https://zod.dev/" target="_blank">
        <img src={zodLogo} className="my_logo_class" alt="Zod logo" />
      </a>
      <a href="https://react.i18next.com/" target="_blank">
        <img src={i18nextLogo} className="my_logo_class" alt="i18next logo" />
      </a>
      <a href="https://tanstack.com/" target="_blank">
        <img src={tanstackLogo} className="my_logo_class" alt="tanstack logo" />
      </a>
    </div>
  );
};

export default Icons;
