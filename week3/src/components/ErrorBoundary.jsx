import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryWrapper = (props) => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <div style={{ color: "red" }}>문제가 발생했습니다: {error.message}</div>
      )}
      {...props}
    />
  );
};

export { ErrorBoundaryWrapper as ErrorBoundary };
