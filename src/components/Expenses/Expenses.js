import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		console.log(`selectedYear`, selectedYear);
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		expense => String(expense.date.getFullYear()) === filteredYear
	);

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
