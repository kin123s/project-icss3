import * as React from "react"
import * as styles from "@views/styles/admin.scss"
// import classNames from "classnames"

export interface IRegistrationProps {}

export default class Registration extends React.Component<IRegistrationProps, any> {
	constructor(props: IRegistrationProps) {
		super(props)
		console.log(this.props)
	}

	public render() {
		return (
			<div className={styles.layer}>
				<div>test</div>
			</div>
		)
	}
}
