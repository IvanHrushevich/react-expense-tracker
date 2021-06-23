import 'ChartBar.css';

const ChartBar = props => {
	let barFillHeight = '0%';

	if (props.max > 0) {
		barFillHeight =
			String(Math.round((props.value / props.maxValue) * 100)) + '%';
	}

	<div className="chart-bar">
		<div className="chart-bar__inner">
			<div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
		</div>
		<div className="chart-bar__label"></div>
	</div>;
};

export default ChartBar;
