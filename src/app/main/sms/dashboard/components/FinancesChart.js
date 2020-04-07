import React, { Component } from 'react';
import Chart, { Legend, Series, Tooltip, Export } from 'devextreme-react/chart';

class FinancesChart extends Component {
  state = {
    dataSource: []
  }

  componentDidMount() { // eslint-disable-next-line
    // fetch('http://localhost:3000/api/graph').then(response => response.json()).then(data => data.map(row => {
      const jan = { month: 'January', income: 1, expense: 3 };
      const feb = { month: "February", income: 1, expense: 3 };
      const mar = { month: 'March', income: 1, expense: 3 };
      const apr = { month: 'April', income: 1, expense: 3 };
      const may = { month: 'May', income: 1, expense: 3 };
      const jun = { month: 'June', income: 1, expense: 3 };
      const jul = { month: 'July', income: 1, expense: 3 };
      const aug = { month: 'August', income: 1, expense: 3 };
      const sep = { month: 'September', income: 1, expense: 3 };
      const oct = { month: 'October', income: 1, expense: 3 };
      const nov = { month: 'November', income: 1, expense: 3 };
      const dec = { month: 'December', income: 1, expense: 3 };
      const year = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
      this.setState({ dataSource: year });
    // }))
  }

  render() {
    return (
      <div className="w-full pt-16 pb-24 px-24">
        <Chart title="Income And Expense Summary Of Current Year" dataSource={this.state.dataSource}>
          <Legend visible={true} verticalAlignment="top" horizontalAlignment="center" itemTextPosition="bottom" />
          <Series valueField="income" argumentField="month" name="Income" type="line" color="#2196f3" />
          <Series valueField="expense" argumentField="month" name="Expenses" type="line" color="#f44336" />
          <Tooltip enabled={true} />
          <Export enabled={true} />
        </Chart>
      </div>
    );
  }
}

export default FinancesChart;
