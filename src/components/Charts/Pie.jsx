import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	AccumulationDataLabel,
	Category,
	PieSeries,
	AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Pie = ({ id, data, legendVisiblity, height }) => {
	const { currentMode } = useStateContext();
	return (
		<AccumulationChartComponent
			id={id}
			height={height}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
			legendSettings={{ visible: legendVisiblity, background: "white" }}
			tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }}
			enableSmartLabels={true}
			enableAnimation={true}
			center={{ x: "50%", y: "50%" }}
		>
			<Inject
				services={[
					AccumulationLegend,
					Category,
					PieSeries,
					AccumulationDataLabel,
					AccumulationTooltip,
				]}
			/>
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					dataSource={data}
					name="Sale"
					xName="x"
					yName="y"
					innerRadius="40%"
					startAngle={0}
					endAngle={360}
					explode={true}
					explodeOffset="10%"
					explodeIndex={0}
					dataLabel={{
						visible: true,
						position: "Inside",
						name: "text",
						font: {
							fontWeight: "600",
							color: "fff",
						},
					}}
					radius="80%"
				/>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	);
};

export default Pie;
