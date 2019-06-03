import * as React from "react"
import styled from "styled-components"

import { Airbnb } from "styled-icons/boxicons-logos/Airbnb"

const Aba = styled(Airbnb)``

const Layer = styled.div`
	text-align: center;
	background: red;
	height: 50px;
`

const TopContentsLayer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 768px;
	padding: 15px;
	background: green;
	margin: auto;
	& img {
		position: absolute;
		left: 16px;
		width: 154px;
		height: 30px;
		overflow: hidden;
	}
`

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
	public render() {
		return (
			<div>
				<Layer>
					<TopContentsLayer>
						<Aba />
					</TopContentsLayer>
				</Layer>
			</div>
		)
	}
}
