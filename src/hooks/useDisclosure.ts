import { useState } from 'react';
export const useDisclosure = (): {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);
  //*переключение состояния *//
  const toggle = (): void => {
    setIsOpen((prev) => !prev);
  };
  const open = (): void => {
    setIsOpen(true);
  };
  const close = (): void => {
    setIsOpen(false);
  };
  return { isOpen, toggle, open, close };
};
