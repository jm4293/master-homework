import React from "react";

export default function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return <p>등록된 할 일이 없습니다.</p>;
  }
  return (
    <ul>
      {todos.map(i => (
        <li key={i.id} style={{ background: i.id % 2 === 0 ? "#eef" : "#fee", padding: "4px", marginBottom: "4px" }}>
          {i.title || "제목 없음"} {i.completed ? "✅ 완료됨" : ""}
        </li>
      ))}
    </ul>
  );
}

