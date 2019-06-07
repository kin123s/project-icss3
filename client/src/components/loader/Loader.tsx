import * as React from "react"
import styled from "styled-components"
import { Spinner } from "reactstrap"

export const LoadingLayer = styled.div`
	display: block;
	z-index: 10;
	margin-left: 50%;
`

const LoadingRender = () => {
	return (
		<LoadingLayer>
			<Spinner
				style={{
					width: "3rem",
					height: "3rem"
				}}
				type="grow"
			/>
		</LoadingLayer>
	)
}

export interface IAppProps {
	Compoent: any
	loading: boolean
}

export class Loader extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)
	}

	public render() {
		const { Compoent, loading } = this.props

		return <div>{loading ? <LoadingRender /> : <Compoent />}</div>
	}
}
