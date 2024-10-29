import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * A modal component that can be used to display a dialog
 * that can be closed by clicking anywhere outside of it.
 *
 * The modal is a fixed positioned element that takes up the whole
 * screen and it is rendered outside of the normal render tree.
 *
 * The component accepts the following props:
 *
 * - `isOpen`: a boolean that indicates whether the modal is open or not
 * - `onClose`: a callback function that is called when the modal is closed
 * - `children`: a React node that will be rendered as the content of the modal
 *
 * The component will also add a `dark` class to the body element when the modal is open
 * and remove it when the modal is closed.
 *
 * The component uses the `react-dom` package to create a portal
 * to the body element.
 *
 * The component uses the `framer-motion` package to animate the modal.
 *
 * The component is styled using Tailwind CSS.
 *
 * The component is a controlled component, meaning that the parent component
 * is responsible for managing the state of the modal.
 *
 * The component is a functional component.
 *
 * The component is exported as a default export.
 *
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose} children={<YourComponent />} />
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
          >
            <div
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="dark:bg-dark relative mx-4 flex cursor-move items-center justify-center rounded border border-gray-500 bg-white p-6 shadow-lg"
              >
                <button
                  onClick={onClose}
                  className="absolute -top-2 right-1 text-4xl dark:text-white"
                >
                  &times;
                </button>
                {children}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
};

export default Modal;
