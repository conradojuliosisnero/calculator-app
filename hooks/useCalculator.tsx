import { useEffect, useRef, useState } from "react";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "x",
  DIVIDE = "÷",
}

export function useCalculator() {
  const [formula, setFormula] = useState<string>("");
  const [number, setNumber] = useState<string>("0");
  const [prevNumber, setPrevNumber] = useState<string | null>(null);

  const lastOperator = useRef<Operator>(null);

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    // calcular el resultado
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");
    lastOperator.current = null;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const deleteLastDigit = () => {
    let currentSing = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSing = "-";
      temporalNumber = number.replace("-", "");
    }

    if (temporalNumber.length > 1) {
      temporalNumber = temporalNumber.slice(0, -1);
      return setNumber(currentSing + temporalNumber);
    }

    setNumber("0");
  };

  const calculateResult = () => { 
    const result = calculateSubResult();
    setFormula(`${result}`);
    setNumber(`${result}`);
    lastOperator.current = null;
    setPrevNumber("0");
  };

  const buildNumber = (numberString: string) => {
    // verificar si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        setNumber(number + numberString);
      }

      // evaluar si es otro cero y hay un punto
      if (numberString === "0" && number.includes(".")) {
        setNumber(number + numberString);
      }

      // evaluar si es diferente de cero y no hay un punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // evitar 000000.0
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.DIVIDE;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.MULTIPLY;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.SUBTRACT;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.ADD;
  };

  const calculateSubResult = () => {
    // calcular el resultado
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num1)) return num1;

    switch (operation) {
      case Operator.ADD:
        return num1 + num2;
      case Operator.SUBTRACT:
        return num1 - num2;
      case Operator.MULTIPLY:
        return num1 * num2;
      case Operator.DIVIDE:
        return num1 / num2;
      default:
        return 0;
    }
  };

  return {
    //   props
    formula,
    number,
    prevNumber,
    //   methods
    buildNumber,
    clean,
    toggleSign,
    deleteLastDigit,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  };
}
