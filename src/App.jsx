import './app.css';
import React, { useState, useEffect } from 'react';
import MainAnimation from './components/MainAnimation';
import IncomeDetails from './components/IncomeDetails';
import Income from './components/Income';
import Button from './components/Button';

function App() {
	const [card, setCard] = useState('1');
	const [kind, setKind] = useState('');
	const [payment, setPayment] = useState('0');
	const [income, setIncome] = useState(0);
	const [period, setPeriod] = useState('Weekly');

	useEffect(() => {
		kind === 'gross'
			? period === 'Weekly'
				? setIncome(payment)
				: period === 'Monthly'
				? setIncome(payment / 4.333333)
				: period === 'Fortnightly'
				? setIncome(payment / 2)
				: setIncome(payment / 52)
			: period === 'Weekly'
			? setIncome(payment * 1.6523463318)
			: period === 'Monthly'
			? setIncome((payment * 1.6523463318) / 4.333333)
			: period === 'Fortnightly'
			? setIncome((payment * 1.6523463318) / 2)
			: setIncome((payment * 1.6523463318) / 52);
	}, [kind, payment, period]);
	{
		/*income is always weekly gross amount becuase it is easier to send it as prop like that and calculate everything 
       in table for income component*/
	}

	return (
		<div className=" grid mt-12 md:mt-44 place-content-center  ">
			<MainAnimation />
			<Button card={card} setCard={setCard} />
			{card === '1' ? (
				<IncomeDetails
					kind={kind}
					setKind={setKind}
					income={income}
					setIncome={setIncome}
					payment={payment}
					setPayment={setPayment}
					period={period}
					setPeriod={setPeriod}
					card={card}
					setCard={setCard}
				/>
			) : (
				<Income income={income} />
			)}
		</div>
	);
}

export default App;
