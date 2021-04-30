/* eslint-disable react/prop-types */
import React from "react"
import moment from "moment"

const Card = ({ file, handleMoveToTrash }) => {

	return (
		<div className="card" style={{ width: '100%' }}>
			<div className="card-img-top" style={{ height: "130px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<h3>{file.extension}</h3>
			</div>
			<div className="card-body" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap" }}>
				<p className="card-title">{moment(file.created).subtract(10, 'days').calendar()}</p>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fas fa-bars"></i></button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" target="_blank" rel="noopener noreferrer"
								href={file.path} download={`the_file.${file.extension}`}><i className="fas fa-download" style={{ marginRight: "10px" }}></i>Download</a>
						</li>
						<li>
							<a className="dropdown-item" onClick={() => handleMoveToTrash(file)}
								href="#"><i className="fas fa-download" style={{ marginRight: "10px" }}></i>Move to Trash</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Card