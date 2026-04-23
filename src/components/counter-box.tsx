import type { FC } from "react";
import Value from "./value";
import { Button } from "./ui/button";
import { incrementCounter, decrementCounter } from "../store/use-counter-store";
import { useTranslation } from "react-i18next";

const CounterBox: FC = () => {
    const { t, i18n } = useTranslation(); 
    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg my-4 text-gray-200">
            <div className="flex flex-col items-center justify-center">
                <h4>{t("counter.title")}</h4>
                <Value />
            </div>
            <div className="card">
                <Button onClick={incrementCounter} variant="outline">{t("counter.increment")}</Button>
                <Button onClick={decrementCounter} variant="outline">{t("counter.decrement")}</Button>
            </div>
        </div>
    );
};

export default CounterBox;
