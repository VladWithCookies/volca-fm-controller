interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button
      type="button"
      className="flex items-center justify-center h-10 bg-gray-900 text-white"
    >
      {children}
    </button>
  );
}
