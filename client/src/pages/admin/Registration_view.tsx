import * as React from "react"
import * as styles from "@views/styles/admin.scss"
// import classNames from "classnames"

import RightMenu from "@views/components/menu/Admin_RightMenu"
// import { Switch, Route } from "react-router-dom"

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
				<RightMenu />

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
