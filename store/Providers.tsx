'use client';

import store from "@/store/index";
import {Provider} from "react-redux";
import {FC} from "react";


export const Providers: FC<{ children?: React.ReactNode | React.ReactNode[] }> = ({ children }) =>{
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers;