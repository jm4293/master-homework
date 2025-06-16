import React from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import { useTodosResource, useTodosState } from "../hooks/useTodos";

export default function TodoContainer() {
  // Suspense로 감싸서 resource.read() 호출 시 로딩/에러 처리
  const resource = useTodosResource();
  const initialTodos = resource.read();
  const {
    todos,
    setTodos,
    input,
    setInput,
    isEditing,
    setIsEditing,
    addTodo
  } = useTodosState(initialTodos);

  return (
    <div>
      <h1 style={{ color: isEditing ? "red" : "blue" }}>할 일 목록 관리 애플리케이션</h1>
      <p>추가하고 싶은 할 일을 입력하신 후, 아래 버튼을 눌러주세요.</p>
      <TodoInput
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setIsEditing(true);
        }}
        onSubmit={addTodo}
        isEditing={isEditing}
      />
      <hr />
      <TodoList todos={todos} />
      <footer style={{ marginTop: "20px", fontSize: "12px", color: "#555" }}>
        <small>버전 0.1 - 실습용으로 간단히 구현된 예제입니다.</small>
      </footer>
    </div>
  );
}

