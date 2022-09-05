import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FRLGMapDispatch, FRLGMapState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => FRLGMapDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<FRLGMapState> = useSelector;
