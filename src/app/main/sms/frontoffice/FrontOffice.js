import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Complains from './components/Complains';
import Admissions from './components/Admissions';
import VisitorInfo from './components/VisitorInfo';
import CallLogs from './components/CallLogs';
import Settings from './components/Settings';

const useStyles = makeStyles({
	header: {
		background: '#039be5'
	}
});

function FrontOffice() {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, value) => {
		setSelectedTab(value);
	};

  const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				header: classes.header,
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pl-24">
					<h1 className="text-48">Front Office</h1>
				</div>
			}
			contentToolbar={
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="off"
					className="w-full"
				>
					<Tab className="normal-case" label="Complains" />
					<Tab className="normal-case" label="Admission Enquiry" />
					<Tab className="normal-case" label="Visitor Information" />
					<Tab className="normal-case" label="Phone Call Logs" />
					<Tab className="normal-case" label="Settings" />
				</Tabs>
			}
			content={
				<div className="p-24">
					{selectedTab === 0 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<Complains />
							</Paper>
						</FuseAnimateGroup>
					)}
					{selectedTab === 1 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<Admissions />
							</Paper>
						</FuseAnimateGroup>
					)}
					{selectedTab === 2 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<VisitorInfo />
							</Paper>
						</FuseAnimateGroup>
					)}
					{selectedTab === 3 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<CallLogs />
							</Paper>
						</FuseAnimateGroup>
					)}
					{selectedTab === 4 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<Settings />
							</Paper>
						</FuseAnimateGroup>
					)}
				</div>
			}
			innerScroll
		/>
	);
}

export default FrontOffice;
