import { useState, useEffect } from 'react';

function useClickOutside(ref) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function closeDropDown(e) {
    if (!ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropDown);

    return () => {
      document.removeEventListener('click', closeDropDown);
    };
  }, []);

  return [isOpen, handleToggle];
}

export default useClickOutside;
