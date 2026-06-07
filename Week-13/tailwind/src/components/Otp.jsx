import { useRef, useState } from "react";

export function Otp ({number}) {

    const ref = useRef(Array(number).fill(0))
    const [values,setValues] = useState(Array(number).fill(""))
    const isDisabled = values.some((val)=> val === "")

    return (
        <div className="flex justify-center">
            
            {Array(number).fill(1).map((x,index) => <SubOtpBox 
            key={index} 
            index={index}
            values={values}
            setValues={setValues}
            reference={
                (e)=>ref.current[index]=e
            }
            onDone = {()=>{
                if(index+1 >= number){
                    return;
                }
                ref.current[index + 1].focus();
            }} 
            onBack={()=>{
                if(index ==0){
                    return
                }
                ref.current[index - 1].focus();
            }} /> )}
            
            <button disabled={isDisabled} >Submit</button>
        </div>
    );
};

function SubOtpBox ({
    reference,onDone,onBack,index,values,setValues
}){

    return(
    <div>
        <input
            value={values[index]}
            ref={reference}
            maxLength={1}
            onKeyUp={(e)=>{
                if(e.key == "Backspace"){
                    const newValues = [...values]
                    newValues[index] = ""
                    setValues(newValues)
                    onBack();
                }
            }}
            onChange={(e)=>{
                const val = e.target.value
                if(/^[0-9]$/.test(val)){ // checks if the value is a number between 0 and 9
                    const newValues = [...values];
                    newValues[index] = val;
                    setValues(newValues)
                    onDone();
                }else {

                }
            }}
            type="text"
            className="w-10 h-12.5 rounded-2xl bg-blue-500 m-2 outline-none px-4 text-amber-50"
        />
    </div>
    )
}