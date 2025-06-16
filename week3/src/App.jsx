import React, { Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import TodoContainer from "./containers/TodoContainer";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <ErrorBoundary>
        <Suspense fallback={<p>잠시만 기다려 주세요. 데이터를 불러오고 있습니다...</p>}>
          <TodoContainer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}