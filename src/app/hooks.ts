import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

type dispatchFunc = () => AppDispatch

export const appUseDispatch:dispatchFunc = useDispatch
export const appUseSelector: TypedUseSelectorHook<RootState> = useSelector