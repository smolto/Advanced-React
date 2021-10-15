/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

export function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  function toogleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider value={{ cartOpen, toogleCart, closeCart, openCart }}>
      {children}
    </LocalStateProvider>
  );
}

export function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}
