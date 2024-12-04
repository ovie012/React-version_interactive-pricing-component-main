import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [discount, setDiscount] = useState(false);
  const [discountedAmount, setDiscountedAmount] = useState();

  const billData = [
    {percentage : '0%', pageViews : '10k', amount : '8.00'},
    {percentage : '25%', pageViews : '50k', amount : '12.00'},
    {percentage : '50%', pageViews : '100k', amount : '16.00'},
    {percentage : '75%', pageViews : '500k', amount : '24.00'},
    {percentage : '100%', pageViews : '1M', amount : '36.00'},
  ]

  const applyDiscount = (item) => {
    setDiscount(!discount);

    // if(discount) {
    //   setDiscountedAmount(item * 0.25);
    // } else {
    //   setDiscountedAmount(item)
    // }
  }

  return (
    <>
        <AppContext.Provider value={{
            applyDiscount,
            discount,
            discountedAmount,
            billData,
        }}>
            {children}
        </AppContext.Provider>
    </>
  )
};