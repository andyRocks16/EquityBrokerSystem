import React from 'react';
var Legend = require('react-d3-core').Legend;

export default class ChartLegend extends React.Component {
    render() {
        var legendClassName = "test-legend-class",
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
                }]

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
                </div>
                 <div className="visible-xs hidden-sm hidden-md hidden-lg row"> 
                    <h4 className="pull-left col-xs-6">Order Execution Status</h4>
                    <div className="pull-right col-xs-6">
                        <Legend
                            legendClassName={legendClassName}
                            legendPosition={legendPosition}
                            legendOffset={legendOffset}
                            chartSeries={chartSeries}
                            width={this.props.wt * 0.7}
                            height={this.props.ht * 0.7}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

