interface ButtonProps {
  label: string;
}

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

function IconButton({ label, icon }: IconButtonProps) {
  return (
    <button>
      {icon} {label}
    </button>
  );
}
