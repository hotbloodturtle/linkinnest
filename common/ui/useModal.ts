"use client";
import { Dispatch, SetStateAction, useState } from "react";

export type ModalProps<T = unknown> = {
  open(): void;
  close(): void;
  isOpen: boolean;
  modalData: T | null;
  setModalData: Dispatch<SetStateAction<T | null>>;
};

const useModal = <T = unknown>(): ModalProps<T> => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<T | null>(null);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setModalData(null);
  };
  return {
    isOpen,
    open,
    close,
    modalData,
    setModalData,
  };
};

export default useModal;
