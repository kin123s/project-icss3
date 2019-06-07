import styled from "styled-components"

export const RightContentsLayer: any = styled.div`
	position: fixed;
	top: 50px;
	left: ${(props: any) => (props.left ? `${props.left}px` : "250px")};
	right: 45px;
	z-index: 15;
	height: 100%;
	background: #fff;
	padding: ${(props: any) => (props.padding ? `${props.padding}` : 0)};

	margin-bottom: 50px;
	overflow-y: scroll;

	animation-name: slide;
	animation-duration: 0.2s;
	-webkit-box-shadow: 0.1em 0 0.1em olive;

	@keyframes slide {
		0% {
			left: 100vh;
		} /* 0 ~ 10  : 정지 */
		/* 50% {
			left: 50vh;
		} */
		100% {
			left: ${(props: any) => (props.left ? `${props.left}px` : "250px")};
		}
	}
`

// const FormBox = styled.div``
