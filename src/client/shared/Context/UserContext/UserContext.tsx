import { createContext } from 'react';
import { UserContextType } from './constant';

export const UserContext = createContext<UserContextType>({ userId: '' });

