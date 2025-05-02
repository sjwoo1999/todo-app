// src/components/TodoForm.tsx
import { useState } from "react";

const categoryOptions = [
  "학교 일정",
  "팀플",
  "개인 프로젝트",
  "개인 업무"
];

interface TodoFormProps {
  onSubmit: (todo: {
    title: string;
    dueDate: string;
    type: string;
  }) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate || !type) return alert("모든 항목을 입력해주세요.");
    onSubmit({ title, dueDate, type });
    setTitle("");
    setDueDate("");
    setType("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">📝 투두 추가</h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          제목
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="예: 캡스톤 회의 준비"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          마감일
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          유형
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">유형 선택</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        추가하기
      </button>
    </form>
  );
}
