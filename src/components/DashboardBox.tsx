import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title: string;
}

export function DashboardBox({ children, title }: Props) {
  return (
    <div className="bg-white bg-opacity-75 rounded-xl shadow-md max-w-sm sm:max-w-lg">
      <div className="border-b p-5 border-warm-gray-300">
        <p className="font-medium text-[#120b14] text-lg"> {title} </p>
      </div>
      { children }
    </div>
  );
}
