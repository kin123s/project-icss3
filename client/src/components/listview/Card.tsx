import * as React from "react"

import { CardLayer } from "@views/styles/Admin"

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)
	}

	public render() {
		return (
			<CardLayer>
				test1
				<div />
			</CardLayer>
		)
	}
}
