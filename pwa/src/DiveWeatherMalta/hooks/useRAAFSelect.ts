import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../../raafStore';
export const useRAAFSelect: TypedUseSelectorHook<RootState> = useSelector;
