import React, { useState } from "react";

export default function AppointmentsDashboard() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", service: "Haircut", status: "pending" },
    { id: 2, name: "Priya Sharma", service: "Facial", status: "pending" },
  ]);

  const [employees] = useState(["Rahul", "Sneha", "Arjun"]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [time, setTime] = useState("");

  const handleAccept = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const confirmAccept = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedAppointment.id
          ? {
              ...appt,
              status: "accepted",
              employee: selectedEmployee,
              time: time,
            }
          : appt
      )
    );

    setSelectedAppointment(null);
    setSelectedEmployee("");
    setTime("");
  };

  const handleReject = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: "rejected" } : appt
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="hover:text-black cursor-pointer">Personal Info Edit</li>
          <li className="hover:text-black cursor-pointer">Add Employee</li>
          <li className="hover:text-black cursor-pointer">Accept Member</li>
        </ul>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Shop Name</h1>
          <span className="text-gray-500">Admin Panel</span>
        </header>

        {/* Appointments Grid */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white rounded-2xl shadow-md p-5 transition hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold">{appt.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Service: {appt.service}</p>

              <p className="text-sm mb-3">
                Status:
                <span
                  className={`ml-2 font-medium ${
                    appt.status === "accepted"
                      ? "text-green-600"
                      : appt.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {appt.status}
                </span>
              </p>

              {appt.status === "accepted" && (
                <div className="text-xs text-gray-500 mb-3">
                  Employee: {appt.employee} <br />
                  Time: {appt.time}
                </div>
              )}

              {appt.status === "pending" && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(appt)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(appt.id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>

      {/* Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Assign Employee & Set Time</h2>

            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Employee</option>
              {employees.map((emp, index) => (
                <option key={index} value={emp}>
                  {emp}
                </option>
              ))}
            </select>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedAppointment(null)}
                className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmAccept}
                disabled={!selectedEmployee || !time}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}