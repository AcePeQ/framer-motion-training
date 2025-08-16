import React from "react";
import { motion } from "motion/react";

const statsData = [
  {
    id: 1,
    title: "Sprzedaż",
    value: "152,340",
    unit: "zł",
    icon: "💰",
    change: "+12%",
    changeType: "positive",
    description: "w tym miesiącu",
  },
  {
    id: 2,
    title: "Użytkownicy",
    value: "8,429",
    unit: "",
    icon: "👥",
    change: "+5%",
    changeType: "positive",
    description: "aktywnych",
  },
  {
    id: 3,
    title: "Zamówienia",
    value: "1,205",
    unit: "",
    icon: "📦",
    change: "-3%",
    changeType: "negative",
    description: "w tym tygodniu",
  },
  {
    id: 4,
    title: "Konwersja",
    value: "24.5",
    unit: "%",
    icon: "📈",
    change: "+8%",
    changeType: "positive",
    description: "średnia",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "Nowe zamówienie",
    time: "2 min temu",
    user: "Jan Kowalski",
  },
  {
    id: 2,
    action: "Rejestracja użytkownika",
    time: "5 min temu",
    user: "Anna Nowak",
  },
  {
    id: 3,
    action: "Płatność zrealizowana",
    time: "12 min temu",
    user: "Piotr Wiśniewski",
  },
  {
    id: 4,
    action: "Anulowanie zamówienia",
    time: "18 min temu",
    user: "Maria Kowalczyk",
  },
];

const complexVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    ".stat-title": {
      rotate: 360,
    },
  },
};

export default function DashboardComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Ostatnia aktualizacja: 13:45
              </span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                JK
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={complexVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-6 py-8"
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="stat-title text-sm font-medium text-gray-500">
                  {stat.title}
                </h3>
                <div className="stat-icon text-2xl">{stat.icon}</div>
              </div>

              <div className="stat-value text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
                {stat.unit}
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`stat-change text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Placeholder */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Wykres sprzedaży
            </h3>
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-500">Tutaj będzie wykres</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ostatnia aktywność
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
