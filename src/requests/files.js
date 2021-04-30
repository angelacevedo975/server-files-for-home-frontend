import fetchRequest from "./FetchRequest"

export const getFiles = () => {
	return fetchRequest(`/file`, {
		method: 'GET'
	});
}

export const uploadNewFile = (formData) => {
	return fetchRequest("/file/upload", {
		method: "POST",
		body: formData
	})
}

export const removeFile = (filename) => {
	return fetchRequest(`/file/remove/${filename}`, {
		method: "POST",
	})
}