import React, { useState } from "react";

import { AnimatePresence, motion, Reorder } from "motion/react";

const todosArray = [
  {
    id: 1,
    text: "Nauczyć się Framer Motion",
    completed: false,
    priority: "high",
  },
  {
    id: 2,
    text: "Zrobić zakupy spożywcze",
    completed: true,
    priority: "medium",
  },
  {
    id: 3,
    text: "Przeczytać artykuł o React",
    completed: false,
    priority: "low",
  },
  { id: 4, text: "Pójść na siłownię", completed: false, priority: "high" },
  {
    id: 5,
    text: "Przygotować prezentację",
    completed: true,
    priority: "high",
  },
  {
    id: 6,
    text: "Zadzwonić do klienta",
    completed: false,
    priority: "medium",
  },
  {
    id: 7,
    text: "Zaktualizować portfolio",
    completed: false,
    priority: "low",
  },
  { id: 8, text: "Sprawdzić emaile", completed: true, priority: "medium" },
];

const priorityOrder = { high: 0, medium: 1, low: 2 };

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const SortableTodoList = () => {
  const [todos, setTodos] = useState(todosArray);
  const [sortBy, setSortBy] = useState("default"); // "default", "priority", "completed", "alphabetical"
  const [filterBy, setFilterBy] = useState("all"); // "all", "active", "completed"

  // Filtrowanie
  let filteredTodos = todos;
  if (filterBy === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filterBy === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  // Sortowanie
  let sortedTodos = [...filteredTodos];
  switch (sortBy) {
    case "priority":
      sortedTodos.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
      break;
    case "completed":
      sortedTodos.sort((a, b) => a.completed - b.completed);
      break;
    case "alphabetical":
      sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
      break;
    default:
      // Zachowaj oryginalną kolejność
      break;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Sortowalna Lista Zadań
        </h1>

        {/* Kontrolki */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sortowanie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sortuj według:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Domyślna kolejność</option>
                <option value="priority">Priorytet</option>
                <option value="completed">Status ukończenia</option>
                <option value="alphabetical">Alfabetycznie</option>
              </select>
            </div>

            {/* Filtrowanie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pokaż:
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Wszystkie ({todos.length})</option>
                <option value="active">
                  Aktywne ({todos.filter((t) => !t.completed).length})
                </option>
                <option value="completed">
                  Ukończone ({todos.filter((t) => t.completed).length})
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista zadań */}
        <div className="space-y-3">
          <Reorder.Group values={todos} onReorder={setTodos}>
            {sortedTodos.map((todo, index) => (
              <Reorder.Item key={todo.id} value={todo}>
                <AnimatePresence>
                  <motion.div
                    layout
                    layoutId={`todo-${todo.id}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    className={`bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow ${
                      todo.completed ? "opacity-75" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                      />

                      {/* Tekst zadania */}
                      <span
                        className={`flex-1 ${
                          todo.completed
                            ? "line-through text-gray-500"
                            : "text-gray-800"
                        }`}
                      >
                        {todo.text}
                      </span>

                      {/* Priorytet */}
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                          todo.priority
                        )}`}
                      >
                        {todo.priority}
                      </span>

                      {/* Drag handle */}
                      <div className="cursor-move text-gray-400 hover:text-gray-600 px-2">
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>

        {/* Stan pusty */}
        {sortedTodos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📝</div>
            <p>Brak zadań w tej kategorii</p>
          </div>
        )}

        {/* Statystyki */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Wyświetlane: {sortedTodos.length} z {todos.length} zadań
            {sortBy !== "default" && ` • Sortowanie: ${sortBy}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SortableTodoList;
