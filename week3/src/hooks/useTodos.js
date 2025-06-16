import { useState, useCallback, useMemo } from "react";

function fetchTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
      if (!res.ok) throw new Error("데이터 로딩 실패");
      return res.json();
    });
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}

// resource를 모듈 스코프에서 한 번만 생성
const todosResource = wrapPromise(fetchTodos());

export function useTodosResource() {
  return todosResource;
}

export function useTodosState(initial) {
  const [todos, setTodos] = useState(initial || []);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = useCallback(() => {
    if (!input.trim()) return;
    setTodos(prev => [
      ...prev,
      { title: input, id: Math.random() * 10000 }
    ]);
    setInput("");
    setIsEditing(false);
  }, [input]);

  return {
    todos,
    setTodos,
    input,
    setInput,
    isEditing,
    setIsEditing,
    addTodo
  };
}
