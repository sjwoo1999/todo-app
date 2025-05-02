// src/pages/Home.tsx
import TodoForm from "../components/TodoForm";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);

  const handleAddTodo = (todo: any) => {
    console.log("새 투두:", todo);
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <TodoForm onSubmit={handleAddTodo} />
      <div className="max-w-md mx-auto mt-8 space-y-2">
        <h3 className="text-lg font-semibold">🗂️ 입력된 투두:</h3>
        {todos.map((todo, idx) => (
          <div
            key={idx}
            className="p-3 bg-white rounded border shadow flex justify-between"
          >
            <span>{todo.title}</span>
            <span className="text-sm text-gray-500">{todo.dueDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
