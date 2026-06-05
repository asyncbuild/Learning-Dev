import { useRef } from "react";

export function Otp () {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    return (
        <div className="flex justify-center">
            <SubOtpBox ref={ref1} onDone = {()=>{
                ref2.current.focus();
            }} />
            <SubOtpBox ref={ref2} onDone = {()=>{
                ref3.current.focus();
            }} />
            <SubOtpBox ref={ref3} onDone = {()=>{
                ref4.current.focus();
            }} />
            <SubOtpBox ref={ref4} onDone = {()=>{
                ref5.current.focus();
            }} />
            <SubOtpBox ref={ref5} onDone = {()=>{
                ref6.current.focus();
            }} />
            <SubOtpBox ref={ref6} onDone = {()=>{
                ref6.current.focus();
            }}/>
        </div>
    );
};

function SubOtpBox ({
    reference,onDone
}){
    return(
    <div>
        <input ref={reference} onChange={(e)=>{
            onDone()
        }} type="text" className="w-10 h-12.5 rounded-2xl bg-blue-500 m-2 outline-none px-4 text-amber-50"/>
    </div>
    )
}