import * as React from "react"

import { Card, Button, CardTitle, CardText, Col } from "reactstrap"

// components
import { Contents, DefaultRow } from "@views/components/layout"
import ComposedChart from "@views/components/charts/ComposedChart"
import LineChart from "@views/components/charts/LineChart"

import { Loader } from "@views/components/loader"

export interface IDashboardProps {}

export default class Dashboard extends React.Component<IDashboardProps, any> {
	constructor(props: IDashboardProps) {
		super(props)
		this.state = {
			loading: true
		}

		this.renderContents = this.renderContents.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false })
		}, 1000)
	}

	renderContents() {
		return (
			<DefaultRow>
				<Col sm="6">
					<Card body={true} id="card_leyer_1">
						<CardTitle>Dashboard</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional content.
						</CardText>
						<ComposedChart contentsID="card_leyer_1" division={1} />
						<Button>자세히보기2</Button>
					</Card>
				</Col>
				<Col sm="6">
					<Card body={true} id="card_leyer_2">
						<CardTitle>Special Title Treatment</CardTitle>
						<LineChart contentsID="card_leyer_2" division={1} />
						<Button>자세히보기</Button>
					</Card>
				</Col>
			</DefaultRow>
		)
	}

	public render() {
		return (
			<Contents>
				<Loader Compoent={this.renderContents} loading={this.state.loading} />
			</Contents>
		)
	}
}
