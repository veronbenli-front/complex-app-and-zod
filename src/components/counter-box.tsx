import type { FC } from "react";
import Value from "./value";
import { Button } from "./ui/button";
import { incrementCounter, decrementCounter } from "../store/use-counter-store";

const CounterBox: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg my-4 text-gray-200">
            <div className="flex flex-col items-center justify-center">
                <h4>Счетчик на Zusland:</h4>
                <Value />
            </div>
            <div className="card">
                <Button onClick={incrementCounter} variant="outline">Увеличить число</Button>
                <Button onClick={decrementCounter} variant="outline">Уменьшить число</Button>
            </div>
        </div>
    );
};

export default CounterBox;
