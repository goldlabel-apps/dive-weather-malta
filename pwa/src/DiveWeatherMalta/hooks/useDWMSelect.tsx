import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../redux/dwmStore';
export const useDWMSelect: TypedUseSelectorHook<RootState> = useSelector;
