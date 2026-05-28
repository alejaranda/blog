interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-xl px-6 py-20 flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
}
