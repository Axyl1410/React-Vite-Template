import { useCallback, useState } from "react";

/**
 * A custom hook to manage boolean state with toggle, open, and close functionality.
 *
 * This hook provides a boolean state `isOpen` along with functions to toggle
 * its value, set it to `true`, or set it to `false`.
 *
 * @param {boolean} [initialState=false] - The initial state of the toggle.
 * @returns {object} An object containing:
 * - `isOpen`: The current state (boolean).
 * - `toggle`: A function to toggle the state.
 * - `open`: A function to set the state to `true`.
 * - `close`: A function to set the state to `false`.
 *
 * @example
 * const something = useToggle();
 * something.isOpen && something.close();
 */
const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, open, close };
};

export default useToggle;
