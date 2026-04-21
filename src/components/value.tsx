import type { FC } from "react";
import { useCounter } from "../store/use-counter-store";

const Value: FC = () => {
  const counter = useCounter()

  return <h2 className="text-4xl font-bold">{counter}</h2>;
};

export default Value;
