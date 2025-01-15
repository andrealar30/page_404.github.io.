import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // Buscar específicamente un enlace que contenga el texto "learn react"
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  
  // Verificar que el enlace esté en el documento
  expect(linkElement).toBeInTheDocument();
  
  // Opcional: Verificar que el href del enlace sea el esperado
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});
