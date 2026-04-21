import meLogo from "../assets/skul.svg";
import zustandLogo from "../assets/zustand.svg";
import tailwindLogo from "../assets/tailwind-svgrepo-com.svg";

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
    </div>
  );
};

export default Icons;
