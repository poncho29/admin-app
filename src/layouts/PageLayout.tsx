import { IoMdAdd } from "react-icons/io";

import { Buttom } from "../components";

interface Props {
  title: string;
  children: React.ReactNode;
  onClickButton?: () => void;
}

export const PageLayout = ({ title = '', children, onClickButton }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{ title }</h2>
        
        <Buttom
          customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600"
          onClick={onClickButton}
        >
          <IoMdAdd size={24} />
          Crear producto
        </Buttom>
      </div>

      {children}
    </>
  )
}
