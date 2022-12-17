import React from 'react';
import Tab from './Tab';

export default function Income(props) {
	const week = Math.round(props.income);
	const month = Math.round(props.income * 4.33333);
	const fort = Math.round(props.income * 2);
	const annual = Math.round(props.income * 52);

	return (
		<div className="shadow-md opacity-80 bg-white flex flex-col items-center h-full w-full ">
			<div className=" opacity-100 flex flex-row pl-4 ">
				<svg
					className="w-10 mr-2 md:mr-5 h-auto hover:w-11"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<h1 className=" font-mono font-extrabold pt-2 text-xl ">
					Income tax Calculator
				</h1>
			</div>
			<Tab week={week} month={month} fort={fort} annual={annual} />
		</div>
	);
}
