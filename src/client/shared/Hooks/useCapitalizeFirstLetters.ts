import { useState } from 'react';

const useCapitalizeFirstLetter = (): ((string: string) => string) => {
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return capitalizeFirstLetter;
};

export default useCapitalizeFirstLetter;
