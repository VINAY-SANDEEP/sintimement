import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Plus } from "lucide-react";

export default function ShopRegistrationPage() {

  const [step, setStep] = useState(1);

  const [shopData, setShopData] = useState({
    shopName: "",
    businessName: "",
    businessDetails: "",
    shopDetails: "",
    phone: "",
    image: null,
  });

  const [employees, setEmployees] = useState([
    {
      name: "",
      phone: "",
      description: "",
      photo: null,
      days: [],
      startTime: "",
      endTime: ""
    }
  ]);

  const handleShopChange = (e) => {
    const { name, value } = e.target;
    setShopData({ ...shopData, [name]: value });
  };

  const handleEmployeeChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...employees];
    updated[index][name] = value;
    setEmployees(updated);
  };

  const handleAddEmployee = () => {
    setEmployees([
      ...employees,
      {
        name: "",
        phone: "",
        description: "",
        photo: null,
        days: [],
        startTime: "",
        endTime: ""
      }
    ]);
  };

  const handleSubmitAll = () => {
    alert("🎉 Shop & Employees Registered Successfully!");
  };

  const toggleDay = (index, day) => {
    const updated = [...employees];
    if (updated[index].days.includes(day)) {
      updated[index].days = updated[index].days.filter(d => d !== day);
    } else {
      updated[index].days.push(day);
    }
    setEmployees(updated);
  };

  const daysList = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] flex items-center justify-center px-4 py-16">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden"
      >

        <div className="p-10 text-white">

          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold mb-6">Register Your Shop</h1>

              <div className="grid md:grid-cols-2 gap-6">
                <input name="shopName" placeholder="Shop Name" onChange={handleShopChange} required className="modern-input"/>
                <input name="businessName" placeholder="Business Name" onChange={handleShopChange} required className="modern-input"/>
              </div>

              <textarea name="businessDetails" placeholder="Business Details" rows="3" onChange={handleShopChange} required className="modern-input mt-6"/>
              <textarea name="shopDetails" placeholder="Shop Details" rows="3" onChange={handleShopChange} required className="modern-input mt-6"/>
              <input type="tel" name="phone" placeholder="Shop Phone" onChange={handleShopChange} required className="modern-input mt-6"/>

              <button
                onClick={() => setStep(2)}
                className="mt-8 w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.03] transition-all"
              >
                Register Shop & Add Employees →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold mb-6">Add Employee Details</h1>

              {employees.map((emp, index) => (
                <div key={index} className="border border-white/10 p-6 rounded-2xl mb-8 bg-white/5">

                  <h2 className="text-xl font-semibold mb-4">Employee {index + 1}</h2>

                  <input
                    name="name"
                    placeholder="Employee Name"
                    value={emp.name}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="modern-input mb-4"
                  />

                  <input
                    name="phone"
                    placeholder="Employee Phone"
                    value={emp.phone}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="modern-input mb-4"
                  />

                  <textarea
                    name="description"
                    placeholder="Employee Description"
                    value={emp.description}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="modern-input mb-4"
                  />

                  {/* Days */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {daysList.map(day => (
                      <button
                        type="button"
                        key={day}
                        onClick={() => toggleDay(index, day)}
                        className={`px-4 py-2 rounded-full text-sm ${
                          emp.days.includes(day)
                          ? "bg-indigo-600 text-white"
                          : "bg-white/10 text-gray-300"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="time"
                      name="startTime"
                      value={emp.startTime}
                      onChange={(e) => handleEmployeeChange(index, e)}
                      className="modern-input"
                    />
                    <input
                      type="time"
                      name="endTime"
                      value={emp.endTime}
                      onChange={(e) => handleEmployeeChange(index, e)}
                      className="modern-input"
                    />
                  </div>

                </div>
              ))}

              <div className="flex gap-4">
                <button
                  onClick={handleAddEmployee}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  <Plus size={18}/> Add Another Employee
                </button>

                <button
                  onClick={handleSubmitAll}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.03] transition"
                >
                  Submit All
                </button>
              </div>
            </>
          )}

        </div>
      </motion.div>

      <style>
        {`
          .modern-input {
            width: 100%;
            padding: 14px;
            border-radius: 14px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: white;
            outline: none;
            transition: 0.3s;
          }
          .modern-input::placeholder {
            color: #9ca3af;
          }
          .modern-input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99,102,241,0.3);
          }
        `}
      </style>

    </div>
  );
}
