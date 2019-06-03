import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { Zap } from "styled-icons/octicons/Zap"
import { Menu as MenuIcon } from "styled-icons/boxicons-regular/Menu"

import Dashboard from "@views/pages/admin/Dashboard"
import Registration from "@views/pages/admin/Registration"
import RegistrationView from "@views/pages/admin/Registration_view"
import Meesager from "@views/pages/admin/Meesager"

export const RouteList = [
	{
		header: "Menu!",
		list: [
			{
				title: "pages2",
				title_icon: MenuIcon,
				items: [
					{
						name: "dashboards",
						location: "/admin/dashboards",
						icon: Zap
					},
					{
						name: "registration",
						location: "/admin/registration",
						icon: Zap
					},
					{
						name: "messager",
						location: "/admin/messager",
						icon: Zap
					}
				]
			},
			{
				title: "pages3",
				title_icon: Zap,
				items: [
					{
						name: "dashboards",
						location: "/admin/dashboards",
						icon: Zap
					},
					{
						name: "Login",
						location: "/admin/dashboards",
						icon: Zap
					},
					{
						name: "Login2",
						location: "/admin/dashboards",
						icon: Zap
					}
				]
			}
		]
	},
	{
		header: "Menu5",
		list: [
			{
				title: "pages2",
				title_icon: MenuIcon,
				items: [
					{
						name: "dashboards",
						location: "/admin/dashboards",
						icon: Zap
					},
					{
						name: "Login",
						location: "/admin/dashboards",
						icon: Zap
					},
					{
						name: "Login2",
						location: "/admin/dashboards",
						icon: null
					}
				]
			}
		]
	}
]

const routes = [
	{
		url: "/admin/dashboards",
		compoent: Dashboard
	},
	{
		url: "/admin/registration",
		compoent: Registration,
		exect: true
	},
	{
		url: "/admin/registration_view/:id",
		compoent: RegistrationView
	},
	{
		url: "/admin/messager",
		compoent: Meesager
	}
]

type IRouteProps = {
	url: string
	compoent: typeof Registration
	exect?: boolean
}

export class RouteRender extends React.Component<any, any> {
	constructor(props: any) {
		super(props)
		this.SetRouter = this.SetRouter.bind(this)
	}

	SetRouter() {
		return routes.map((row: IRouteProps, index) => {
			return (
				<Route
					exect={row.exect ? true : false}
					path={`${row.url}`}
					component={row.compoent}
					key={`AdminRoute${index}`}
				/>
			)
		})
	}

	render() {
		return (
			<Switch>
				{/* <Route exact={true} path="/admin" component={Dashboard}/>  */}
				{/* <Route path="/login" component={Member}/> */}

				{this.SetRouter()}

				<Redirect to="/admin/dashboards" />
			</Switch>
		)
	}
}
