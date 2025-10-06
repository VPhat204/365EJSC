import React from "react";

interface ButtonProps {
  label: string;
}

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

function IconButton({ label, icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        gap: 8,
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
export default IconButton