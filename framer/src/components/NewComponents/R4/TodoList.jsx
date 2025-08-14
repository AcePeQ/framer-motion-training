import React from "react";

const TodoList = () => {
  const todos = [
    { id: 1, text: "Nauczyć się Framer Motion", completed: false },
    { id: 2, text: "Zrobić zakupy", completed: true },
    { id: 3, text: "Przeczytać książkę", completed: false },
    { id: 4, text: "Pójść na siłownię", completed: false },
    { id: 5, text: "Przygotować prezentację", completed: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Lista Zadań
        </h1>

        {/* Formularz dodawania */}
        <div className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Dodaj nowe zadanie..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Dodaj
            </button>
          </div>
        </div>

        {/* Lista zadań */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border ${
                todo.completed ? "opacity-60" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button className="text-red-500 hover:text-red-700 transition-colors font-medium">
                Usuń
              </button>
            </div>
          ))}
        </div>

        {/* Stan pusty */}
        {todos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📝</div>
            <p>Brak zadań do wyświetlenia</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
