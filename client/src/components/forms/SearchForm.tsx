import * as React from "react"
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import styled from "styled-components"

export interface IAppProps {}

const Layer = styled.div`
	padding: 10px;
`

const SearchLayer = styled.div`
	padding: 10px;
`

export default class App extends React.Component<IAppProps, any> {
	public render() {
		return (
			<Layer>
				<SearchLayer>
					<Form>
						<Row>
							<Col md={6}>
								<FormGroup>
									<Label for="exampleEmail">Email</Label>
									<Input
										type="email"
										name="email"
										id="exampleEmail"
										placeholder="with a placeholder"
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="examplePassword">Password</Label>
									<Input
										type="password"
										name="password"
										id="examplePassword"
										placeholder="password placeholder"
									/>
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Label for="exampleAddress">Address</Label>
							<Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
						</FormGroup>
						<FormGroup>
							<Label for="exampleAddress2">Address 2</Label>
							<Input
								type="text"
								name="address2"
								id="exampleAddress2"
								placeholder="Apartment, studio, or floor"
							/>
						</FormGroup>
					</Form>
				</SearchLayer>
			</Layer>
		)
	}
}
