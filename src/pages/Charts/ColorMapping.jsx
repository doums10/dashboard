import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Category,
	Tooltip,
	Legend,
	RangeColorSettingsDirective,
	RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import {
	colorMappingData,
	ColorMappingPrimaryXAxis,
	ColorMappingPrimaryYAxis,
	rangeColorMapping,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const ColorMapping = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<ChartsHeader category="Color-Mapping" title="AAPL Historical" />
			<div className="w-full">
				<ChartComponent
					id="charts"
					primaryXAxis={ColorMappingPrimaryXAxis}
					primaryYAxis={ColorMappingPrimaryYAxis}
					chartArea={{ border: { width: 0 } }}
					background={currentMode === "Dark" ? "#33373E" : "#fff"}
					style={{ textAlign: "center" }}
					tooltip={{ enable: true }}
					legendSettings={{ mode: "Range", background: "white" }}
				>
					<Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={colorMappingData[0]}
							type="Column"
							name="USA"
							xName="x"
							yName="y"
							animation={{ enable: true }}
							cornerRadius={{
								topLeft: 10,
								topRight: 10,
							}}
							marker={{ dataLabel: { visible: true, position: "Outer" } }}
						/>
					</SeriesCollectionDirective>
					<RangeColorSettingsDirective>
						{rangeColorMapping.map((item, index) => (
							<RangeColorSettingDirective key={index} {...item} />
						))}
					</RangeColorSettingsDirective>
				</ChartComponent>
			</div>
		</div>
	);
};

export default ColorMapping;
