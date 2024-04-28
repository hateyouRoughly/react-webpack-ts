import React from "react";
import { SidebarList } from "../../interface";

import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const sidebarList: SidebarList = [
	{
		icon: <SpaceDashboardOutlinedIcon htmlColor={"white"} titleAccess="Dashboard"/>,
		title: "Dashboard",
		path: "/"
	},
	{
		icon: <ContentPasteOutlinedIcon htmlColor={"white"} titleAccess="Project List"/>,
		title: "Project List",
		path: "/project-list"
	},
	{
		icon: <DnsOutlinedIcon htmlColor={"white"} titleAccess="Designer"/>,
		title: "Designer",
		path: "/designer"
	},
	{
		icon: <BalanceOutlinedIcon htmlColor={"white"} titleAccess="Balancing"/>,
		title: "Balancing",
		path: "/balancing"
	},
	{
		icon: <DescriptionOutlinedIcon htmlColor={"white"} titleAccess="Invoicing"/>,
		title: "Invoicing",
		path: "/invoicing"
	},
	{
		icon: <MemoryOutlinedIcon htmlColor={"white"} titleAccess="Processing"/>,
		title: "Processing",
		path: "/processing"
	},
	{
		icon: <LocalPrintshopOutlinedIcon htmlColor={"white"} titleAccess="Printing"/>,
		title: "Printing",
		path: "/printing"
	},
	{
		icon: <SettingsSuggestOutlinedIcon htmlColor={"white"} titleAccess="Install/Bump"/>,
		title: "Install/Bump",
		path: "/install-bump"
	},
	{
		icon: <LocalShippingOutlinedIcon htmlColor={"white"} titleAccess="Delivery/Driver Run"/>,
		title: "Delivery/Driver Run",
		path: "/delivery-driver-run"
	},
	{
		icon: <EngineeringOutlinedIcon htmlColor={"white"} titleAccess="Field Work"/>,
		title: "Field Work",
		path: "/field-work"
	},
	{
		icon: <LocalPhoneOutlinedIcon htmlColor={"white"} titleAccess="Will Call"/>,
		title: "Will Call",
		path: "/will-call"
	},
	{
		icon: <SystemUpdateAltOutlinedIcon htmlColor={"white"} titleAccess="Parts List"/>,
		title: "Parts List",
		path: "/parts-list"
	},
	{
		icon: <AdminPanelSettingsOutlinedIcon htmlColor={"white"} titleAccess="Admin"/>,
		title: "Admin",
		children: [
			{
				icon: <SettingsOutlinedIcon htmlColor={"white"} titleAccess="Setting"/>,
				title: "Setting",
				path: "/setting"
			},
			{
				icon: <GppGoodOutlinedIcon htmlColor={"white"} titleAccess="Security"/>,
				title: "Security",
				path: "/security"
			}
		]
	}
]

export default sidebarList;