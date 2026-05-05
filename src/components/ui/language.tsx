import usaFlag from "../../icon/flag-for-united-states.svg";
import ruFlag from "../../icon/flag-for-russia.svg";


import { useTranslation } from "react-i18next";

const Language = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="relative my-auto w-full flex items-center justify-center bg-gray-100">
            <img src={ruFlag} className={`cursor-pointer w-10 h-10 ${i18n.language == 'ru' ? 'grayscale-0' : 'grayscale-100'}`} alt="Russia flag" onClick={() => { changeLanguage('ru'); }} />
            <img src={usaFlag} className={`cursor-pointer w-10 h-10 ${i18n.language == 'en' ? 'grayscale-0' : 'grayscale-100'}`} alt="USA flag" onClick={() => { changeLanguage('en'); }} />
        </div>
    );
};

export default Language;
