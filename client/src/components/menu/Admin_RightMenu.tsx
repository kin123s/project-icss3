import * as React from "react"
import * as styles from "@views/styles/admin.scss"
import classNames from "classnames"

import RightList from "@views/components/menu/Admin_RightList"

import View_Card from "@views/components/listview/Card"

import { Search } from "styled-icons/boxicons-regular/Search"

const MenuList = [
	{
		Icon: Search,
		tip: "Hello world!",
		Component: View_Card
	},
	{
		Icon: Search,
		tip: "Hello world!",
		Component: () => <div>2</div>
	},
	{
		Icon: Search,
		tip: "Hello world!",
		Component: () => <div>3</div>
	},
	{
		Icon: Search,
		tip: "Hello world!",
		Component: () => <div>4</div>
	}
]

export interface IAppProps {}

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
		console.log("number", event, number)
		this.setState({ dimmed: true, active_number: number })
	}

	public render() {
		const { dimmed, active_number } = this.state

		return (
			<div className={classNames(styles.right_menu)}>
				<div className={dimmed ? styles.dimmed_r_layer : ""} />
				{MenuList.map((row, index) => {
					const indexKeys = index + 1
					const target = `icons_${index}`

					const ActiveCheck = active_number === indexKeys ? true : false
					console.log(indexKeys, active_number, ActiveCheck)

					return (
						<RightList
							onClick={this.dummdOpenEvent}
							key={index}
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
