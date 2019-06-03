import * as React from "react"
import classNames from "classnames"
import * as styles from "@views/styles/layouts/admin.scss"

import Menu from "@views/components/admin/Menu"

// route RouteList
import { RouteList, RouteRender } from "@views/config/routes/RouteAdmin"

export interface IWithProps {}

export default class Admin extends React.Component<IWithProps, any> {
	constructor(props: IWithProps) {
		super(props)

		console.log(this.props)
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
									return (
										<ul key={index} className={classNames(styles.app_menu)}>
											<li className={classNames(styles.app_menu, styles.header)}>
												{list_row.header}
											</li>
											{list_row.list.map((row, index) => {
												return (
													<Menu
														items={row.items}
														key={index}
														title={row.title}
														title_icon={row.title_icon}
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
