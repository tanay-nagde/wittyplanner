import { useState } from "react";

const Analyze = () => {
  const [income, setIncome] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [peopleDependencies, setPeopleDependencies] = useState("");
  const [allocation, setAllocation] = useState(null);

  
  const predictRisk = async () => {
    try {
      const response = await fetch("http://localhost:5000/predict_risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          features: [income, age, experience, peopleDependencies],
        }),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error predicting risk:", error);
    }
  };

  const allocateInvestments = async () => {
    try {
      const response = await fetch("http://localhost:5000/allocate_investments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: age, // Include age in the request
          risk_appetite_percentage: prediction,
          total_amount: 10000,
        }),
      });
      const data = await response.json();
      setAllocation(data.allocation);
    } catch (error) {
      console.error("Error allocating investments:", error);
    }
  };

 
  

  const handleSubmit = async () => {
    await predictRisk();
    await allocateInvestments();
  };


  const equityPercentage = age ? 100 - parseInt(age) : "";

  return (
    <div className="p-10 min-h-screen flex flex-col justify-center items-center text-gray-700">
    <div className="flex flex-col gap-3 [&>*]:px-8  [&>*]:py-2  ">
    <label htmlFor="income">Income</label>  
    <input
        id="income"
        type="text"
        placeholder="enter income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
    <label htmlFor="age">Age</label>  

      <input
      id="age"
        type="number"
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    <label htmlFor="InvetingExp">Experience in making Investments(Months)</label>  

      <input
        type="number"
        placeholder="enter Experience in months"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
    <label htmlFor="income">Income</label>  

      <input
        type="number"
        placeholder="enter People dependencies"
        value={peopleDependencies}
        onChange={(e) => setPeopleDependencies(e.target.value)}
      />
      <input
        className="bg-slate-600 text-white font-semibold"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
      {allocation && (
        <div className="mt-8 mx-auto max-w-lg border border-gray-300 p-4">
          <h2 className="text-lg font-semibold mb-2">Allocation of Investments:</h2>
          <p>Equity: {equityPercentage}%</p>
          <p>Mutual Funds: {allocation.mutual_funds}</p>
          <p>Index Funds: {allocation.index_funds}</p>
          <p>Gold: {allocation.gold}</p>
          <p>Fixed Deposits: {allocation.fds}</p>
        </div>
      )}</div>
    </div>

  );
};



export default Analyze;
