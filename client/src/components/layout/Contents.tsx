import * as React from "react"

import styled from "styled-components"

const Contents = styled.div`
	margin: 10px 0 0 0;
	width: 100%;
`

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)
	}

	public render() {
		return <Contents>{this.props.children}</Contents>
	}
}
