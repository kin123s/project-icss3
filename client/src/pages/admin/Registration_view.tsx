import * as React from "react"
import * as styles from "@views/styles/admin.scss"
// import classNames from "classnames"

import RightMenu from "@views/components/menu/Admin_RightMenu"
// rightMenu S
import { Search } from "styled-icons/boxicons-regular/Search"
import { CreditCard } from "styled-icons/feather/CreditCard"

import { Right_card } from "@views/components/admin/registration"

const MenuList = [
	{
		Icon: CreditCard,
		tip: "카드발송",
		Component: Right_card
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
// rightMenu E
export interface IAppProps {
	match: {
		params: {
			id?: String
			view?: String
		}
	}
}

export interface IAppState {
	id?: String
	view?: String
}

export default class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props)

		this.state = {
			id: this.props.match.params.id,
			view: this.props.match.params.view
		}
	}

	public render() {
		return (
			<div className={styles.layer}>
				<RightMenu Menu={MenuList} />

				<div className={styles.use_r_menu}>
					<MainViews {...this.props} />
				</div>
			</div>
		)
	}
}

const MainViews = (props: IAppProps) => {
	return <div>test22</div>
}
