import * as React from "react"

import * as styles from "@views/styles/admin.scss"

import { Tooltip } from "reactstrap"

export interface IAppProps {
	onClick: any
	Icon: React.ForwardRefExoticComponent<any>
	index: number
	tip: string
	target: string
	Component: any
	active: boolean
}

export interface IAppState {}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)

		this.state = {
			tooltipOpen: false,
			dimmed: false
		}

		this.toggle = this.toggle.bind(this)
		this.HandleClickEvent = this.HandleClickEvent.bind(this)
	}

	toggle() {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		})
	}

	HandleClickEvent(event: any, number: number) {
		this.props.onClick(event, number)
	}

	public render() {
		const { Icon, tip, target, index, Component, active } = this.props

		return (
			<div>
				<div
					className={styles.icons}
					id={target}
					onClick={e => {
						this.HandleClickEvent(e, index)
					}}>
					<Icon size="20" />
					<Tooltip
						placement="left"
						isOpen={this.state.tooltipOpen}
						target={target}
						toggle={this.toggle}>
						{tip}
					</Tooltip>
				</div>
				{active ? <Component /> : ""}
			</div>
		)
	}
}
