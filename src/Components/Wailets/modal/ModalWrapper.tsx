import React from "react";
import { AddBudgetModal } from "./AddBudgetModal";
interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = ({ isOpen, onClose }: ModalWrapperProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0F4F4A]/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg px-4">
        <AddBudgetModal onClose={onClose} />
      </div>
    </div>
  );
};
export default ModalWrapper;
