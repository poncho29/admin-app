import { IoMdClose } from "react-icons/io";

import '../../styles/modal.css';

interface Props {
  isOpen: boolean;
  maxWidth?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, maxWidth, children, onClose }: Props ) => {
  return (
    <div
      className={`modal ${isOpen ? 'modal-show' : 'modal-hide'}`}
    >
      <div
        className={`modal-container ${maxWidth}`}
      >
        <IoMdClose
          size={24}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        />

        {children}
      </div>
    </div>
  );
};
