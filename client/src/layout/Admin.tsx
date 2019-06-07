import * as React from "react"
import classNames from "classnames"
import * as styles from "@views/styles/admin.scss"

import Menu from "@views/components/admin/Menu"

// route RouteList
import { RouteList, RouteRender } from "@views/config/routes/RouteAdmin"

// import { Zap } from "styled-icons/octicons/Zap"
// import Dashboard from "@views/pages/admin/Dashboard"

// const Lists = [
// 	{
// 		header: "Dashboard",
// 		items: [
// 			{
// 				title: "Dashboard",
// 				url: "/admin/dashboards",
// 				component: Dashboard,
// 				icon: Zap,
// 				use: true,
// 				show: true
// 			}
// 		]
// 	}
// ]

export interface IWithProps {}

export default class Admin extends React.Component<IWithProps, any> {
	constructor(props: IWithProps) {
		super(props)
		this.MenuClickEvent = this.MenuClickEvent.bind(this)
	}

	MenuClickEvent(tab: number, sub_tab: number) {
		console.log("click", tab, sub_tab)

		return true
	}

	render() {
		return (
			<div>
				<div className={classNames(styles.layout, styles.c_row, styles.top)}>
					<div className={classNames(styles.layout, styles.sidebar, styles.top)}>
						<img
							className={classNames(styles.logo)}
							src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/logo-inverse.png"
						/>
					</div>
					<div className={classNames(styles.layout, styles.contents, styles.top)}>top contents</div>
				</div>
				<div className={classNames(styles.layout, styles.c_row, styles.contents)}>
					<div className={classNames(styles.layout, styles.sidebar, styles.main)}>
						<div className={classNames(styles.app_menu, styles.layer)}>
							<div className={classNames(styles.app_menu)}>
								{RouteList.map((list_row, index) => {
									const MenuTabs = index + 1

									return (
										<ul key={index} className={classNames(styles.app_menu)}>
											<li className={classNames(styles.app_menu, styles.header)}>
												{list_row.header}
											</li>
											{list_row.list.map((row, list_row_index) => {
												const MenuSubTabs = list_row_index + 1

												return (
													<Menu
														items={row.items}
														key={index}
														title={row.title}
														title_icon={row.title_icon}
														tab={MenuTabs}
														sub_tab={MenuSubTabs}
														onClick={this.MenuClickEvent}
													/>
												)
											})}
										</ul>
									)
								})}
							</div>
						</div>
					</div>
					<div className={classNames(styles.layout, styles.contents, styles.main)}>
						<RouteRender />
					</div>
				</div>
			</div>
		)
	}
}
