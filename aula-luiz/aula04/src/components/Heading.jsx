export function Heading({ children }) {
  let color = 'black';

  const text = children.toString();

  if (text.includes('Lucro')) color = 'blue';
  if (text.includes('Prejuízo')) color = 'red';

  return <h1 style={{ color }}>{children}</h1>;
}