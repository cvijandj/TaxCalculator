import React from 'react';


export default function Button (props) {
    const {card, setCard}= props || '';

    return(
        <div className=' flex flex-row '>
            <div className={` font-serif shadow-inner hover:shadow-md hover:text-emerald-900 hover:font-bold rounded-t-md ml-5 ${card === '1' ? " bg-lime-200 " : " bg-white "}`}>
            <p className='pl-2 pr-2 pt-1 pb-2' onClick={() => setCard('1')} 
            > Income details</p>
            </div>
            <div className={` font-serif shadow-inner hover:shadow-md hover:text-emerald-900 hover:font-bold  rounded-t-md ml-5 ${card === '2' ? " bg-lime-200 " : " bg-white "}`}>
            <p className='pl-2 pr-2 pt-1 pb-2' onClick={() => setCard('2')} 
            > Income</p>
            </div>

        </div>
    )
}