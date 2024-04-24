import React from "react";
import { SidebarList } from "../../interface";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const sidebarList: SidebarList = [
	{
		icon: <DashboardIcon htmlColor={"white"} titleAccess="Dashboard"/>,
		title: "Dashboard",
		path: "/"
	},
	{
		icon: <ViewListIcon htmlColor={"white"} titleAccess="Dashboard"/>,
		title: "Listing",
		path: "/listing"
	},
	{
		icon: <InsertDriveFileIcon htmlColor={"white"} titleAccess="Products"/>,
		title: "Products",
		children: [
			{
				icon: <TurnedInIcon htmlColor={"white"} titleAccess="My Product"/>,
				title: "My Product",
				path: "/my-product"
			},
			{
				icon: <FileCopyIcon htmlColor={"white"} titleAccess="All Product"/>,
				title: "All Product",
				path: "/all-product"
			},
		]
	}
]

export default sidebarList;