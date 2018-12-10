import fetch from "cross-fetch";

let apiUrl = "/*@echo API_URL*/";

if (apiUrl[apiUrl.length - 1] == "/") {
	apiUrl = apiUrl.substring(0, apiUrl.length - 1);
}

function api(): Promise<any>;
function api(url: string): Promise<any>;
function api(url: string, data: any): Promise<any>;

function api() {
	let url = "/";
	let data = null;
	switch (arguments.length) {
		case 1:
			url = arguments[0];
			break;
		case 2:
			url = arguments[0];
			data = url = arguments[1];
			break;
	}
	if (url[0] != "/") {
		url = "/" + url;
	}

	url = apiUrl + url;

	return fetch(url, {
		method: data ? "POST" : "GET",
		headers: data
			? {
					Accept: "application/json",
					"Content-Type": "application/json"
			  }
			: undefined,
		body: data ? JSON.stringify(data) : undefined
	})
		.then(res => res.json())
		.then(data => {
			if (data.type == "ok") return data.value;
			let errorMessage = "Unknown error";
			if (data.value) {
				if (typeof data.value == "string") errorMessage = data.value;
				else if (data.value.message) {
					errorMessage = data.value.message;
				}
			}
			throw new Error(errorMessage);
		})
		.catch(error => {
			console.error(error);
			throw error;
		});
}

export default api;
