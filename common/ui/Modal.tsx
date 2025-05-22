import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ModalProps } from "./useModal";

export default function Modal({
  modal,
  children,
}: PropsWithChildren<{ modal?: ModalProps }>) {
  const modalRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal-root");
      document.body.appendChild(modalRoot);
    }
    modalRootRef.current = modalRoot;
  }, []);

  if (!modal?.isOpen || !modalRootRef.current) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-white opacity-90"
        onClick={modal?.close}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-[400px] h-[500px] flex flex-col items-center relative pointer-events-auto">
          <button
            className="absolute top-4 right-4 text-[#808099] text-xl font-bold p-1 hover:bg-[#F7F7FA] rounded-full"
            onClick={modal?.close}
            aria-label="Close"
          >
            <AiOutlineClose size={24} />
          </button>
          {children}
        </div>
      </div>
    </>,
    modalRootRef.current
  );
}
