import * as React from "react"
import styled from "styled-components"
import { Card, CardTitle, CardText, Button } from "reactstrap"

const CardLayer = styled.div`
	width: 100%;
	margin-bottom: 100px;
`

export interface IAppProps {
	list: Array<any>
}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)
	}

	public render() {
		const { list } = this.props

		return (
			<CardLayer>
				{list.map((row, index) => {
					return <CardRow key={index} />
				})}
			</CardLayer>
		)
	}
}

const CardRow = (props: any) => {
	return (
		<Card body={true} style={{ width: "33%", display: "inline-block" }}>
			<CardTitle>Dashboard</CardTitle>
			<CardText>With supporting text below as a natural lead-in to additional content.</CardText>

			<Button>자세히보기2</Button>
		</Card>
	)
}
