import React from 'react';
var Legend = require('react-d3-core').Legend;
var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;
//import ChartLegend from './ChartLegend.component';

class Chart extends React.Component {
    render() {

        var legendClassName = "test-legend-class",
            legendClassNameXS = "test-legend-class-xs",
            legendPosition = 'left',
            legendOffset = 90,
            chartSeries = [
                {
                    field: 'quantityExecuted',
                    name: 'Executed',
                    color: '#6b7d93'
                },
                {
                    field: 'quantityPlaced',
                    name: 'Placed',
                    color: '#8597ad'
                },
                {
                    field: 'quantity',
                    name: 'Total',
                    color: '#bdcad0'
                }
            ];
        var y = function (d) {
            return d.id;
        },
            x = function (d) {
                return +d
            },
            yScale = 'ordinal',
            yLabel = 'Order Id',
            xTicks = [2, '%'],
            xTickFormat = d3.format('%')
        if (this.props.data.length) {
            return (
                <div>
                    <div className=" hidden-xs hidden-sm  visible-md visible-lg">
                        <h3 className="text-center">Order Execution Status</h3>
                        <div className="center-block">
                            <Legend
                                legendClassName={legendClassName}
                                legendPosition={legendPosition}
                                legendOffset={legendOffset}
                                chartSeries={chartSeries}
                                width={this.props.wt * 0.3}
                                height={this.props.ht * 0.5}
                            />
                        </div>
                        <BarStackHorizontalChart
                            data={this.props.data}
                            chartSeries={chartSeries}
                            width={this.props.w * 0.85}
                            height={this.props.h * 0.7}
                            xTicks={xTicks}
                            showYGrid={false}
                            yScale={yScale}
                            yLabel={yLabel}
                            y={y}
                            x={x}
                            xTickFormat={xTickFormat}
                            showLegend={false}
                            className="col-xs-12" />
                    </div>
                    <div className="visible-sm hidden-xs hidden-md hidden-lg">
                        <h4 className="pull-left">Order Execution Status</h4>
                        <div className="pull-right">
                            <Legend
                                legendClassName={legendClassName}
                                legendPosition={legendPosition}
                                legendOffset={legendOffset}
                                chartSeries={chartSeries}
                                width={this.props.wt * 0.3}
                                height={this.props.ht * 0.5}
                            />
                        </div>
                        <BarStackHorizontalChart
                            data={this.props.data}
                            chartSeries={chartSeries}
                            width={this.props.w * 0.8}
                            height={this.props.h * 0.7}
                            xTicks={xTicks}
                            showYGrid={false}
                            yScale={yScale}
                            yLabel={yLabel}
                            y={y}
                            x={x}
                            xTickFormat={xTickFormat}
                            showLegend={false}
                            className="col-xs-12" />
                    </div>
                    <div className="visible-xs hidden-sm hidden-md hidden-lg row">
                        <h4 className="pull-left col-xs-6">Order Execution Status</h4>
                        <div className="pull-right col-xs-6">
                            <Legend
                                legendClassName={legendClassNameXS}
                                legendPosition={legendPosition}
                                legendOffset={legendOffset}
                                chartSeries={chartSeries}
                                width={this.props.wt * 0.7}
                                height={this.props.ht * 0.7}
                            />
                        </div>
                        <BarStackHorizontalChart
                            data={this.props.data}
                            chartSeries={chartSeries}
                            width={this.props.w * 0.99}
                            height={this.props.h * 0.8}
                            xTicks={xTicks}
                            showYGrid={false}
                            yScale={yScale}
                            yLabel={yLabel}
                            y={y}
                            x={x}
                            xTickFormat={xTickFormat}
                            showLegend={false}
                            className="col-xs-12" />
                    </div>
                </div>
            )
        }
        else {
            return (

                    <h4 className="text-center">
                    There is no data to display
                    </h4>
            );
        }
    }
};
export default Chart;