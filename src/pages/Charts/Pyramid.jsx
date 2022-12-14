import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	AccumulationDataLabel,
	AccumulationTooltip,
	PyramidSeries,
	AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const ColorMapping = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<ChartsHeader category="Pyramid" title="Food Comparison Chart" />
			<div className="w-full">
				<AccumulationChartComponent
					id="pyramid-chart"
					background={currentMode === "Dark" ? "#33373E" : "#fff"}
					tooltip={{ enable: true }}
					legendSettings={{ mode: "Range", background: "white" }}
				>
					<Inject
						services={[
							AccumulationLegend,
							AccumulationDataLabel,
							AccumulationTooltip,
							PyramidSeries,
							AccumulationSelection,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							dataSource={PyramidData}
							name="Food"
							xName="x"
							yName="y"
							type="Pyramid"
							width="45%"
							height="80%"
							neckWidth="15%"
							gapRatio={0.03}
							explode={true}
							emptyPointSettings={{ mode: "Drop", fill: "red" }}
							dataLabel={{
								visible: true,
								position: "Inside",
								name: "text",
							}}
						/>
					</AccumulationSeriesCollectionDirective>
					
				</AccumulationChartComponent>
			</div>
		</div>
	);
};

export default ColorMapping;
