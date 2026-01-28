import { useEffect, useRef, useState } from "react";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "×",
  DIVIDE = "÷",
}

export function useCalculator() {
  const [formula, setFormula] = useState<string>("");
  const [number, setNumber] = useState<string>("0");
  const [prevNumber, setPrevNumber] = useState<string | null>(null);

  const lastOperator = useRef<Operator>(null);

  useEffect(() => {
    // calculate your result
    setFormula(number);
  }, [number]);

    const buildNumber = (input: string) => {
      
        // verificar si ya existe el punto decimal
        if (number === "." && number.includes(".")) return;


        if (number.startsWith("0") || number.startsWith("-0")) {
          // punto decimal
          if (input === ".") {
              setNumber(number + input);
              // evaluar si es otro cero, y hay un punto
          } else if (input === "0" && number.includes(".")) {
              setNumber(number + input);
              // evaluar si es diferente de cero y no tiene un punto
          } else if (input !== "0" && !number.includes(".")) {
              setNumber(input);
              // evitar 0000.0
          } else if (input === "0" && !number.includes(".")) {
              return;
          } else {
              setNumber(number + input);
            }
        } else {
            setNumber(number + input);
        }
        

  };

  return {
    //   props
    formula,
    number,
    prevNumber,
    //   methods
    buildNumber,
  };
}
