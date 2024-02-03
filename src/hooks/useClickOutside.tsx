import { useEffect, useRef, useState } from 'react';

export const useClickOutside = <T extends HTMLElement>(initialState = false) => {
  const ref = useRef<T | null>(null);

  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen)
  };

  return { ref, isOpen, handleOpen };
};