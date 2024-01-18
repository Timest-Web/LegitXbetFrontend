import { createContext } from 'react';
import { UserContextType } from './constant';

export const UserContext = createContext<UserContextType | undefined>(undefined);