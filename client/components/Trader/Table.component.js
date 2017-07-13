import React from 'react';
import ReactDOM from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Trader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadOrders: true,
            value: 'ID'
        }
    }

    searchOrders(event) {
        this.setState({})
        let search = this.state.value;
        let key = event.target.value;
        this.props.searchOrders(key, search, this.props.orders);
        this.setState({
            loadOrders: false
        })
        if (key == "") {
            this.setState({ loadOrders: true })
        }
    }
    handleSearchChange(event, index, value) {
        this.setState({
            value
        }
        )
    }


    render() {


        let data = this.state.loadOrders ? this.props.orders : this.props.searchitems
        const styles = {
            color: "#64738a",
            fontWeight: "bold"
        }
        const style = {
            borderColor: "#64738a",
        }
        return (<div>
            <Paper>
                <div className="row">
                    <form className="form-horizontal form-color color">
                        <TextField underlineFocusStyle={style} style={{ marginLeft: 15 }} onChange={this.searchOrders.bind(this)}
                            className=" col-md-10 col-xs-2 col-sm-4 txtfield" id="search"
                            placeholder="Search"
                        />
                        <DropDownMenu className="col-md-2 col-xs-10 col-sm-8" value={this.state.value} onChange={this.handleSearchChange.bind(this)} selectedMenuItemStyle={styles}>
                            <MenuItem value='ID' primaryText="ID" />
                            <MenuItem value='SIDE' primaryText="Side" />
                            <MenuItem value='SYMBOL' primaryText="Symbol" />
                            <MenuItem value='QUANTITY' primaryText="Quantity" />
                            <MenuItem value='STATUS' primaryText="Status" />
                            <MenuItem value='TRADER' primaryText="Trader" />
                        </DropDownMenu>
                    </form>
                </div>
            </Paper>
            <div className="row">
                <div className="container-fluid hidden-xs hidden-sm color">
                    <Paper>

                        <BootstrapTable data={data} bordered={false} pagination={true} >
                            <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='creationTime' dataAlign="center" dataSort={true}>Creation Time</TableHeaderColumn>
                            <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                            <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={true} >Placed</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantityExecuted' dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                            <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='priority' dataAlign="center" dataSort={true}>Priority</TableHeaderColumn>
                            <TableHeaderColumn dataField='status' dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='traderId' dataAlign="center" dataSort={true}>Trader</TableHeaderColumn>
                        </BootstrapTable>
                    </Paper>
                </div>
                <div className="container-fluid hidden-xs hidden-md hidden-lg">
                    <Paper>

                        <BootstrapTable data={data} bordered={false} pagination={true}>
                            <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='creationTime' dataAlign="center" dataSort={true}>Creation Time</TableHeaderColumn>
                            <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                            <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={true} >Placed</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantityExecuted' dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                            <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='status' dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                        </BootstrapTable>
                    </Paper>
                </div>
                <div className="container-fluid hidden-sm hidden-md hidden-lg">
                    <Paper>

                        <BootstrapTable data={data} bordered={false} pagination={true}>
                            <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                            <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                        </BootstrapTable>
                    </Paper>

                </div>
            </div>
        </div >
        )
    }
}