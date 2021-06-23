import ChartBar from './ChartBar';

import 'Chart.css';

const Chart = props => {
	<div className="chart">
		{props.dataPoints.map(dataPoint => (
			<ChartBar
				key={dataPoint.label}
				valuer={dataPoint.value}
				maxValue={null}
				label={dataPoint.label}
			/>
		))}
	</div>;
};

export default Chart;
