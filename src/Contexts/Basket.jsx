import { render } from '@testing-library/react';
import React, { useState } from 'react'

const BasketContext = React.createContext({});
export const ThingsProvider = BasketContext.Provider

export default BasketContext;
