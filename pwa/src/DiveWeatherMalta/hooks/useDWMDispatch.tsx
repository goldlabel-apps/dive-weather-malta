import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/dwmStore";
export const useDWMDispatch = () => useDispatch<AppDispatch>();