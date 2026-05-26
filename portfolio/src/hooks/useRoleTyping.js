import { useEffect, useState } from 'react';

export function useRoleTyping(roles, typeSpeed = 85, pauseMs = 2200, deleteSpeed = 45) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex] ?? '';
    let timeoutId;

    if (!isDeleting && text === current) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else if (isDeleting) {
      timeoutId = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
    } else {
      timeoutId = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, roleIndex, roles, typeSpeed, pauseMs, deleteSpeed]);

  return text;
}
