import { createFileRoute } from '@tanstack/react-router'
import "../App.css";
import swordfishImage from "../image/swordfish.webp";
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen w-full bg-gray-700 flex items-center justify-center">
            <div className="w-100 flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg my-4 text-gray-200">
                <img src={swordfishImage} alt="ship" className="w-36 h-36" />
                <h1 className="text-2xl my-4 font-cheltenham">Say hello to my little friend!</h1>
                <p className='text-justify'>{t('index.mainText')}</p>
                <span className="font-cheltenham-bold italic text-right block w-full text-2xl mt-10">SEE YOU SPACE COWBOY...</span>
            </div>
        </div>
    )
}
