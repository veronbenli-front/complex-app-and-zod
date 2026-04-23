import meLogo from "../icon/skul.svg";
import zustandLogo from "../icon/zustand.svg";
import tailwindLogo from "../icon/tailwind-svgrepo-com.svg";
import shadcnLogo from "../icon/Shadcn.svg";
import zodLogo from "../icon/Zod.svg";
import usaFlag from "../icon/flag-for-united-states.svg";
import ruFlag from "../icon/flag-for-russia.svg";
import i18nextLogo from "../icon/inext_logo_icon_248054.svg";



import { useTranslation } from "react-i18next";

const Icons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative my-auto w-full flex items-center justify-center bg-gray-100">
      <img src={usaFlag} className="cursor-pointer absolute top-1 right-10 w-10 h-10" alt="USA flag" onClick={() => changeLanguage('en')} />
      <img src={ruFlag} className="cursor-pointer absolute top-1 left-10 w-10 h-10" alt="Russia flag" onClick={() => changeLanguage('ru')} />
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
    </div>
  );
};

export default Icons;
