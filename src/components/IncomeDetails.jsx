import React from "react";
import DropDown from "./DropDown";

export default function IncomeDetails (props) {
   
    return(
        <div className="shadow-md pl-2 md:pl-0 opacity-80 bg-white flex flex-col items-start  h-96 w-96 ">
            <div className=" opacity-100 flex flex-row pl-4 ">
               <svg className="w-10 mr-2 md:mr-5 h-auto hover:w-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               <h1 className=" font-mono font-extrabold pt-2 text-xl ">Income tax Calculator</h1>
            </div>
                <div className=" ml-3 flex mt-12 flex-col">
                    <p className=" mt-5 font-mono text-md md:text-lg" >What is your total income?</p>
                    <div className="flex mt-3 flex-row opacity-100">
                          <input
                            type="number"
                            placeholder="0000"
                            className= ' font-bold shadow-md text-center md:w-64 border-zinc-500 border-2 border-r-0 rounded-l-md '
                            onChange={(e) =>  props.setPayment(e.target.value)}
                            />
                          <DropDown period = {props.period}
                            setPeriod = {props.setPeriod}/>
                    </div> 
                </div>  
                <p className=" ml-3 mt-10 font-mono text-md md:text-lg"> Please choose the income type:</p>
                <div className=" self-center flex flex-row mt-2 md:mt-3 opacity-100 ">
                    <button className={` text-lg font-serif shadow-sm shadow-lime-900 hover:text-emerald-900 hover:font-bold hover:shadow-lime-900 hover:shadow-md w-40 self-center text-center h-12 border-r-0 rounded-l-md  ${props.kind === 'gross' ? " bg-lime-700 " :  " bg-white "}`}
                               onClick={() => props.setKind('gross')}> Gross income</button>
                    <button className={` text-lg font-serif shadow-sm shadow-lime-900 hover:text-emerald-900 hover:font-bold hover:shadow-lime-900 hover:shadow-md w-40 self-center text-center h-12 border-l-0 rounded-r-md  ${props.kind === 'net' ? " bg-lime-700 " :  " bg-white "}`} 
                               onClick={() => props.setKind('net')}> Net income</button>
               </div>
               <button  onClick={() => props.setCard('2')}
                        className={` self-center text-lg mt-3 w-64 font-serif shadow-sm rounded-md h-10 shadow-lime-900 hover:text-emerald-900 hover:font-bold hover:shadow-lime-900 hover:shadow-md text-center  ${props.kind === 'net' ? " bg-green-700 " : props.kind === 'gross' ? " bg-green-700": " bg-slate-600 "}`}> {`Continue  >`}
              </button>
        </div>
    )
}