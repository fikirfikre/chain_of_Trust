import { MdSearch, MdPeople, MdSettings } from "react-icons/md";
import { IoAnalytics, IoPerson } from "react-icons/io5";
import styles from './Dashboard.module.css';
import Navbar from "../components/Navbar";
import { FaBug } from "react-icons/fa";
import { useState } from "react";
import Property from "./Property";
import Overview, { OverviewTitle } from "../components/Overview";
import { NavLink } from "react-router-dom";
import ReportBar from "../components/ReportBar";
function DashBoard() {
	const rightbar = [
		{
			title: "You fixed a bug",
			icons: <FaBug />,
		},
		{
			title: "New user registered",
			icons: <IoPerson />,
		},
		{
			title: "You fixed a bug",
			icons: <FaBug />,
		},
		{
			title: "New user registered",
			icons: <IoPerson />,
		},
	];


	const [recent, setRecent] = useState(rightbar)
	return (
	<div className={styles.dashboard}>
		<div className={styles.content}>
			<Navbar />
			<div className={styles.body}>
				<MainContent />
			</div>
		</div>

		<div className='right-bar'>

			<div className='recent'>
				<h3 className='title'>Recent Transaction</h3>
				{recent.map((item) => (
					<div className='context'>
						<p style={{ paddingLeft: "10px" }}>{item.title} </p>
					</div>
				))}
			</div>
			<div className='maintenance'>
				<h3> Maintenance </h3>
				<p className='pending'>
					Pending <span>123,459</span>
				</p>
				<p className='resolved'>
					Resolved <span>123,459</span>
				</p>
			</div>
		</div>
	</div>)
}
function MainContent() {
	const stat = [
		{
			title: "Total property",
			value: 400,
		},
		{
			title: "Available property",
			value: 300,
		},

		{
			title: "Assigned property",
			value: 350,
		},
	];
	const [statistics, setStatistics] = useState(stat)
	return <>
		<h3>Quick Stat</h3>
		<Overview stat={statistics} />
		<h3>Request Overview</h3>
		<Overview stat={statistics} />
		<h3>Report</h3>
		<NavLink className='categ' to='/report'>
			<ReportBar />
		</NavLink>
	</>
}
export default DashBoard