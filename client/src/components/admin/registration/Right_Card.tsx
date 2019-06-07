import * as React from "react"

import { RightContentsLayer } from "@views/styles/Admin"

import SearchForm from "@views/components/forms/SearchForm"
import Card from "@views/components/list_view/Card"

// import * as qs from "qs"
import * as request from "request-promise"

const CardList = [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7]

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
	constructor(props: IAppProps) {
		super(props)

		this.state = {
			tag: "",
			start: 0
		}

		this.SearchTag = this.SearchTag.bind(this)

		this.SearchTag("드레스")
	}

	SearchTag = async (search_tag: string) => {
		const url = "http://www.ifamily.co.kr/arda/arda/test"
		const data = {
			device_uuid: "2df47e7acf6ba4c2",
			search_tag: search_tag
		}

		const options = {
			method: "POST",
			// data: qs.stringify(data),
			form: data,
			url: url,
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			},
			json: true
		}

		// request(options).then((result: any) => {
		// 	if (result.status === 200) {
		// 		this.setState({
		// 			iBotList: result.data.data
		// 		})
		// 	}
		// })

		const result = await request(options, (err, res, body) => {
			if (err) {
				console.log("network Err")
				return null
			}

			if (res.statusCode === 200) {
				return body
			}
		})

		console.log(result)
	}

	public render() {
		return (
			<RightContentsLayer padding="10px" left={400}>
				<h4>카드첨부1</h4>
				<SearchForm />
				<Card list={CardList} />
			</RightContentsLayer>
		)
	}
}
