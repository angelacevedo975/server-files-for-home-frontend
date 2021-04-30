import React from "react"
import { getFiles, removeFile } from "../../requests/files"
import Card from "../card"

const Home = () => {

	const [files, setFiles] = React.useState([])

	React.useEffect(() => {
		async function getAllFiles() {
			console.log("getting data");
			const { success, error, response } = await getFiles()
			if (success && !error) {
				if (!response.error) {
					setFiles(response)
				}
			}
		}
		getAllFiles()
	}, [])

	const handleMoveToTrash = async (fileToTrash) => {
		const { success, response, error } = await removeFile(fileToTrash.name)
		console.log(fileToTrash.name);
		if (success && response) {
			const updatedFiles = files.filter((file) => (file.name !== fileToTrash.name))
			setFiles(updatedFiles)
			console.log(response);
		} else {
			console.log("err");
			console.log(error);
		}
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col col-12 my-3">
					<h1 className="text-center">My Files</h1>
				</div>
				{
					files.map((file, index) => (
						<div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center mt-3">
							<Card file={file} handleMoveToTrash={handleMoveToTrash}></Card>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Home