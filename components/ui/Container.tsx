import type { ReactNode, CSSProperties } from "react";

export default function Container({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 32px",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
