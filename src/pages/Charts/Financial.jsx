import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	HiloOpenCloseSeries,
	Tooltip,
	DateTime,
	Zoom,
	Logarithmic,
	Crosshair,
	Inject,
} from "@syncfusion/ej2-react-charts";
import {
	financialChartData,
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
	if (value.x >= date1) {
		return value.x, value.high, value.low;
	}
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<ChartsHeader category="Financial" title="AAPL Historical" />
			<div className="w-full">
				<ChartComponent
					id="charts"
					crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
					primaryXAxis={FinancialPrimaryXAxis}
					primaryYAxis={FinancialPrimaryYAxis}
					chartArea={{ border: { width: 0 } }}
					background={currentMode === "Dark" ? "#33373E" : "#fff"}
					style={{ textAlign: "center" }}
					tooltip={{ enable: true, shared: true }}
					legendSettings={{ visible: false }}
					
				>
					<Inject
						services={[
							HiloOpenCloseSeries,
							Tooltip,
							DateTime,
							Zoom,
							Logarithmic,
							Crosshair,
						]}
					/>
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={returnValue}
							type="HiloOpenClose"
							animation={{ enable: true }}
							bearFillColor="#2ecd71"
							bullFillColor="#e74c3d"
							xName="x"
							low="low"
							high="high"
							open="open"
							close="close"
							name="Apple Inc"
						/>
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	);
};

export default Financial;
