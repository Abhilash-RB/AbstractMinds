import { useState } from "react";

export default function App() {
  const [appliance, setAppliance] = useState("");
  const [wattage, setWattage] = useState("");
  const [hours, setHours] = useState("");
  const [bill, setBill] = useState<number | null>(null);

  const calculateBill = () => {
    const watts = Number(wattage);
    const hrs = Number(hours);

    if (!watts || !hrs) {
      setBill(null);
      return;
    }

    const unitsPerDay = (watts * hrs) / 1000;
    const monthlyUnits = unitsPerDay * 30;
    const estimatedBill = monthlyUnits * 8; // sample ₹8/unit

    setBill(Math.round(estimatedBill));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">
          ⚡ Smart Energy Optimizer
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Predict your electricity bill and find the best time to use appliances
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Appliance Name (AC, Fan...)"
            value={appliance}
            onChange={(e) => setAppliance(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Wattage (W)"
            value={wattage}
            onChange={(e) => setWattage(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Hours Used Per Day"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={calculateBill}
            className="w-full bg-black text-white rounded-lg p-3 font-semibold hover:opacity-90"
          >
            Calculate Bill
          </button>
        </div>

        {bill !== null && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-3">Results</h2>
            <p>Estimated Monthly Bill: ₹{bill}</p>
            <p>
              Best Time to Use {appliance || "this appliance"}: 11 AM – 4 PM
            </p>
            <p>Potential Savings: ₹250/month</p>
          </div>
        )}
      </div>
    </div>
  );
}
