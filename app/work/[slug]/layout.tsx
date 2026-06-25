import { ReactNode } from "react";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  );
}