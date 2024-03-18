import { ReactNode } from "react";

interface AdminMenuMiniProps {
  header: string;
  content: ReactNode;
}

const AdminMenuMini: React.FC<AdminMenuMiniProps> = ({ header, content }) => {
  return (
    <div>
      <p className="text-[0.7rem] font-bold my-3 pl-7">{header}</p>
      <section className="flex flex-col">{content}</section>
    </div>
  );
};

export default AdminMenuMini;
