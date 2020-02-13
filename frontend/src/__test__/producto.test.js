import React from 'react';
import { render } from '@testing-library/react';
import Producto from '../components/Producto';

test('Render Componente Agregar Producto', () => {
  const { getByText } = render(<Producto />);
  const header = getByText(/Cantidad/i);
  expect(header).toBeInTheDocument();
});