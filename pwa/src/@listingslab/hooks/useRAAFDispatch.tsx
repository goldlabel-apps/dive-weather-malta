import { useDispatch } from "react-redux";
import type { AppDispatch } from "../raafStore";
export const useRAAFDispatch = () => useDispatch<AppDispatch>();