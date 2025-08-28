/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";

const Wrapper = ({ children }: any) => {

    return <>
        {children}
        <ScrollToTop />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
