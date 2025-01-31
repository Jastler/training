import React from "react";
import Counter from "../../features/counter";
import DefaultAnimation from "@components/shared/animations/DefaultAnimation";

const CounterPage: React.FC = () => {
  return (
    <DefaultAnimation>
      <Counter />
    </DefaultAnimation>
  );
};

export default CounterPage;
