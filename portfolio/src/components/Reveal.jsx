import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
