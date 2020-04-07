import React, { Component } from "react";
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FinancesChart from './components/FinancesChart';
import AwardsTable from './components/AwardsTable';
import NotesTable from './components/NotesTable';
import EventCalendar from './components/calendar/EventCalendar';
import jwtService from 'app/services/jwtService';

const role = jwtService.getUserRole();

class Dashboard extends Component {
  state = {
		students: [],
		parents: [],
		teachers: [],
		librarians: [],
		accountants: [],
		employees: [],
    studentPayments: [],
    income: [],
    expenses: []
	}

	getUrl(endpoint) {
		return 'http://localhost:3000/api/' + endpoint;
	}

	componentDidMount() {
    let endpoints = ['students', 'parents', 'teachers', 'librarians', 'accountants', 'employees'];

		endpoints.map((endpoint) =>
			fetch(this.getUrl(endpoint)).then(res => res.json()).then(results => this.setState({ [endpoint]: results }))
		)
	}

  render() {
    return (
			<div className="w-full">
        <FinancesChart />

        {role === 'admin' &&
  				<div className="p-12">
  					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.students}</Typography>
  									<Typography className="text-16" color="textSecondary">Students</Typography>
  								</div>
  							</Paper>
  						</div>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.parents}</Typography>
  									<Typography className="text-16" color="textSecondary">Parents</Typography>
  								</div>
  							</Paper>
  						</div>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.teachers}</Typography>
  									<Typography className="text-16" color="textSecondary">Teachers</Typography>
  								</div>
  							</Paper>
  						</div>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.librarians}</Typography>
  									<Typography className="text-16" color="textSecondary">Librarians</Typography>
  								</div>
  							</Paper>
  						</div>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.accountants}</Typography>
  									<Typography className="text-16" color="textSecondary">Accountants</Typography>
  								</div>
  							</Paper>
  						</div>
  						<div className="widget flex w-full sm:w-1/6 md:w-1/6 p-16">
  							<Paper className="w-full">
  								<div className="text-center pt-12 pb-28">
  									<Typography className="text-72 leading-none text-blue">{this.state.employees}</Typography>
  									<Typography className="text-16" color="textSecondary">Employees</Typography>
  								</div>
  							</Paper>
  						</div>
  					</FuseAnimateGroup>
  				</div>
        }

				<div className="px-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full sm:w-1/3 md:w-1/3 px-16">
              <Paper className="w-full">
                <div className="p-12">
                  <Typography className="text-20 text-blue">Student Payments</Typography>
                  <Typography className="text-24 text-blue">$ {this.state.studentPayments}</Typography>
                  <Typography className="text-12" color="textSecondary">(Last 30 Days)</Typography>
                </div>
              </Paper>
						</div>
						<div className="widget flex w-full sm:w-1/3 md:w-1/3 px-16">
              <Paper className="w-full">
                <div className="p-12">
                  <Typography className="text-20 text-blue">Income</Typography>
                  <Typography className="text-24 text-blue">$ {this.state.income}</Typography>
                  <Typography className="text-12" color="textSecondary">(Last 30 Days)</Typography>
                </div>
              </Paper>
						</div>
						<div className="widget flex w-full sm:w-1/3 md:w-1/3 px-16">
              <Paper className="w-full">
                <div className="p-12">
                  <Typography className="text-20 text-red">Expenses</Typography>
                  <Typography className="text-24 text-red">$ {this.state.expenses}</Typography>
                  <Typography className="text-12" color="textSecondary">(Last 30 Days)</Typography>
                </div>
              </Paper>
						</div>
					</FuseAnimateGroup>
				</div>

				<div className="p-12">
					<FuseAnimateGroup enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="p-16">
              <AwardsTable />
						</div>
					</FuseAnimateGroup>
				</div>

				<div className="px-12 pb-12">
					<FuseAnimateGroup enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="px-16 pb-16">
              <NotesTable />
						</div>
					</FuseAnimateGroup>
				</div>

				<EventCalendar />
			</div>
    );
  }
}

export default Dashboard;
