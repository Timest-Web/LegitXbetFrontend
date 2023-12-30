import { createContext} from 'react';
import { BetContextType } from './constant';

export const BetContext = createContext<BetContextType | undefined>(undefined);
