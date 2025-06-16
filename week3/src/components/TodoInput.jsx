import React from "react";

export default function TodoInput({ value, onChange, onSubmit, isEditing }) {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        placeholder="예: 프레젠테이션 준비하기"
        style={{ padding: "4px", marginRight: "8px", width: "60%" }}
      />
      <button onClick={onSubmit}>{isEditing ? "수정 완료" : "할 일 추가"}</button>
    </div>
  );
}

