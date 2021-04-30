/* eslint-disable react/prop-types */
import React from "react"
import "./index.css"

const Alert = ({ show, setShow, success = true, text }) => {

	React.useEffect(() => {
		show && setTimeout(() => {
			setShow(!show)
		}, 3000)
	}, [show])

	return (
		<div className={`bg-${success ? "success" : "danger"} nice-alert${show ? "-active" : ""}`}>
			{text}
		</div>
	)
}

export default Alert