import * as React from "react"
import * as styles from "@views/styles/admin.scss"
import classNames from "classnames"

import RightList from "@views/components/menu/Admin_RightList"

type TMenu = {
	Icon: any
	tip: string
	Component: any
}

export interface IAppProps {
	Menu: Array<TMenu>
}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)

		this.state = {
			checkType: "",
			dimmed: false,
			active_number: 0
		}

		this.dummdOpenEvent = this.dummdOpenEvent.bind(this)
	}

	dummdOpenEvent(event: any, number: number) {
		let dimmed = this.state.dimmed

		console.log(number)
		if (this.state.active_number === number) {
			dimmed = false
		} else {
			dimmed = true
		}

		this.setState({
			dimmed: dimmed,
			active_number: this.state.active_number === number ? 0 : number
		})
	}

	public render() {
		const { dimmed, active_number } = this.state

		const { Menu } = this.props

		return (
			<div className={classNames(styles.right_menu)}>
				<div className={dimmed ? styles.dimmed_r_layer : ""} />
				{Menu.map((row, index) => {
					const indexKeys = index + 1
					const target = `r_menu_${indexKeys}`

					const ActiveCheck = active_number === indexKeys ? true : false

					return (
						<RightList
							onClick={this.dummdOpenEvent}
							key={target}
							target={target}
							Icon={row.Icon}
							tip={row.tip}
							index={indexKeys}
							active={ActiveCheck}
							Component={row.Component}
						/>
					)
				})}
			</div>
		)
	}
}
