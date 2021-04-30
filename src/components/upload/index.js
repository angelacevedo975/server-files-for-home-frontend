import React from "react"
import { uploadNewFile } from "../../requests/files";
import Alert from "../Alert";

const UploadPage = () => {

	const [selectedFile, setSelectedFile] = React.useState(false);
	const [alertText, setAlertText] = React.useState("")
	const [alertSuccess, setAlertSuccess] = React.useState(true)
	const [showAlert, setShowAlert] = React.useState(false)

	const handleSelectFile = (e) => {
		console.log(e.target.files[0]);
		setSelectedFile(e.target.files[0])
	}

	const handleUploadFile = async (e) => {
		e.preventDefault()
		if (!selectedFile) {
			setAlertText("Please select a file to continue")
			setAlertSuccess(false)
			setShowAlert(true)
			return
		}
		const formData = new FormData()
		formData.append("file", selectedFile)
		const { success, response, error } = await uploadNewFile(formData)
		if (success && response) {
			console.log(response);
			setAlertText("The file has been uploaded successfully")
			setAlertSuccess(true)
			setShowAlert(true)
			document.getElementById("uploadForm").reset()
			setSelectedFile(false)
		} else {
			console.log(error);
			setAlertText(JSON.stringify(error))
			setAlertSuccess(false)
			setShowAlert(true)
		}
		/*fetch('http://localhost:3005/file/upload', {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error(err));*/
	}

	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col col-12">
					<h1 className="text-center">Upload File</h1>
				</div>
				<div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
					<form onSubmit={handleUploadFile} id="uploadForm">
						<div className="mb-3">
							<label htmlFor="fileInput" className="form-label">Choose the file to upload</label>
							<input type="file" id="fileInput" className="form-control" aria-describedby="fileInputHelper" onChange={handleSelectFile} />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block">Upload</button>
						</div>
					</form>
				</div>
			</div>
			<Alert text={alertText} show={showAlert} setShow={setShowAlert} success={alertSuccess}></Alert>
		</div>
	)
}

export default UploadPage