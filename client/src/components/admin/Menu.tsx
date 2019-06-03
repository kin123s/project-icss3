import * as React from "react"
import { Link } from "react-router-dom"

import classNames from "classnames"
import * as styles from "@views/styles/layouts/admin.scss"

import { Zap } from "styled-icons/octicons/Zap"
import { Menu as MenuIcon } from "styled-icons/boxicons-regular/Menu"

export interface IAppProps {
	items: Array<any>
	title: String
	title_icon: any
}

const MenuRender = (state: any) => {
	const changeStyle = styles[state.class] ? styles[state.class] : ""
	const classNames = `${styles.app_menu} ${styles.collapse} ${changeStyle}`

	return (
		<ul className={classNames}>
			{state.items.map((row: any, index: number) => {
				const Icons = row.icon ? row.icon : Zap

				return (
					<li key={index}>
						<Link to={row.location}>
							<b>
								<Icons size="25" />
								<span>{row.name}</span>
							</b>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)
		this.MenuDropBoxEvent = this.MenuDropBoxEvent.bind(this)

		this.state = {
			class: "",
			active: false,
			items: this.props.items
		}
	}

	MenuDropBoxEvent() {
		this.setState({
			class: this.state.active ? "" : "show",
			active: this.state.active ? false : true
		})
		return true
	}

	public render() {
		// const classNames = `app_menu collapse ${this.state.class}`;
		const Title_icon = this.props.title_icon ? this.props.title_icon : MenuIcon

		return (
			<li className={classNames(styles.app_menu, styles.active)}>
				<b onClick={this.MenuDropBoxEvent} aria-expanded="true">
					<Title_icon size="25" />
					<span>{this.props.title}</span>
				</b>
				<MenuRender {...this.state} {...this.props} />
			</li>
		)
	}
}
