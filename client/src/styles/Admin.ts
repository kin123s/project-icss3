import styled from "styled-components"

export const CardLayer = styled.div`
	position: fixed;
	top: 50px;
	left: 400px;
	right: 45px;
	z-index: 15;
	height: 100%;
	background: #fff;

	animation-name: slide;
	animation-duration: 1s;

	-webkit-box-shadow: 0.1em 0 0.1em olive;

	@keyframes slide {
		0% {
			left: 100vh;
		} /* 0 ~ 10  : 정지 */
		/* 50% {
			left: 50vh;
		} */
		100% {
			left: 400px;
		}
	}
`
