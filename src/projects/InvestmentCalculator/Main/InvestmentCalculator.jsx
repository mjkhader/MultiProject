import UserInput from "../userInput/UserInput";
import Header from "../header/Header";
import Results from "../results/Results";
import { useState } from "react";
import "./InvestmentCalculator.css";

function InvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div id="InvestmentContainer">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than Zeroo!</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </div>
  );
}

export default InvestmentCalculator;
