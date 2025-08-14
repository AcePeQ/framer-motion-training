import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = [
  {
    id: "overview",
    label: "Przegląd",
    icon: "📊",
    content: {
      title: "Przegląd Projektu",
      description: "Ogólne informacje o postępie projektu",
      stats: [
        { label: "Ukończone zadania", value: "24", color: "text-green-600" },
        { label: "W trakcie", value: "8", color: "text-yellow-600" },
        { label: "Do zrobienia", value: "12", color: "text-blue-600" },
        { label: "Członkowie zespołu", value: "6", color: "text-purple-600" },
      ],
    },
  },
  {
    id: "tasks",
    label: "Zadania",
    icon: "✓",
    content: {
      title: "Lista Zadań",
      description: "Wszystkie zadania w projekcie",
      tasks: [
        { name: "Design systemu", status: "completed", priority: "high" },
        {
          name: "Implementacja API",
          status: "in-progress",
          priority: "high",
        },
        { name: "Testy jednostkowe", status: "todo", priority: "medium" },
        { name: "Dokumentacja", status: "todo", priority: "low" },
        { name: "Code review", status: "in-progress", priority: "medium" },
      ],
    },
  },
  {
    id: "team",
    label: "Zespół",
    icon: "👥",
    content: {
      title: "Członkowie Zespołu",
      description: "Informacje o zespole projektowym",
      members: [
        {
          name: "Anna Kowalska",
          role: "Project Manager",
          avatar: "👩‍💼",
          status: "online",
        },
        {
          name: "Piotr Nowak",
          role: "Frontend Developer",
          avatar: "👨‍💻",
          status: "online",
        },
        {
          name: "Maria Wiśniewska",
          role: "UI/UX Designer",
          avatar: "👩‍🎨",
          status: "away",
        },
        {
          name: "Tomasz Zieliński",
          role: "Backend Developer",
          avatar: "👨‍🔧",
          status: "offline",
        },
        {
          name: "Karolina Dąbrowska",
          role: "QA Engineer",
          avatar: "👩‍🔬",
          status: "online",
        },
      ],
    },
  },
  {
    id: "analytics",
    label: "Analityka",
    icon: "📈",
    content: {
      title: "Analityka Projektu",
      description: "Metryki i statystyki projektu",
      metrics: [
        { name: "Velocity", value: "23 SP", trend: "up", change: "+12%" },
        { name: "Bug Rate", value: "2.1%", trend: "down", change: "-0.5%" },
        { name: "Test Coverage", value: "87%", trend: "up", change: "+5%" },
        { name: "Uptime", value: "99.9%", trend: "stable", change: "0%" },
      ],
    },
  },
  {
    id: "settings",
    label: "Ustawienia",
    icon: "⚙️",
    content: {
      title: "Ustawienia Projektu",
      description: "Konfiguracja i preferencje projektu",
      settings: [
        { name: "Powiadomienia email", enabled: true },
        { name: "Integracja Slack", enabled: false },
        { name: "Automatyczne backupy", enabled: true },
        { name: "API access", enabled: true },
        { name: "Public visibility", enabled: false },
      ],
    },
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "text-green-600 bg-green-100";
    case "in-progress":
      return "text-yellow-600 bg-yellow-100";
    case "todo":
      return "text-blue-600 bg-blue-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    if (!currentTab) return null;

    const { content } = currentTab;

    return (
      <motion.div
        key={activeTab}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        className="p-8"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {content.title}
          </h2>
          <p className="text-gray-600">{content.description}</p>
        </div>

        {/* Overview content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 border"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tasks content */}
        {activeTab === "tasks" && (
          <div className="space-y-4">
            {content.tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      task.status === "completed"
                        ? "bg-green-500"
                        : task.status === "in-progress"
                        ? "bg-yellow-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <span className="font-medium">{task.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "medium"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Team content */}
        {activeTab === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 border"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{member.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      member.status === "online"
                        ? "bg-green-500"
                        : member.status === "away"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Analytics content */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{metric.name}</h3>
                  <span
                    className={`text-sm ${
                      metric.trend === "up"
                        ? "text-green-600"
                        : metric.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings content */}
        {activeTab === "settings" && (
          <div className="space-y-4">
            {content.settings.map((setting, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border flex items-center justify-between"
              >
                <span className="font-medium text-gray-800">
                  {setting.name}
                </span>
                <div
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                    setting.enabled ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      setting.enabled ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Projektu
          </h1>
          <p className="text-gray-600 mt-2">
            Zarządzaj swoim projektem w jednym miejscu
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-8">
            <div className="flex space-x-8 relative">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-2 px-4 py-4 text-sm font-medium relative transition-colors ${
                    activeTab === tab.id
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}

                  {/* Active indicator - ten element powinien mieć layoutId="activeTab" */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="bg-gray-50 min-h-96 overflow-hidden">
          <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DynamicTabs;
