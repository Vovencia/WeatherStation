export default function safe(
	handler: () => void,
	errorHandler?: (e: Error) => void
) {
	try {
		return handler();
	} catch (e) {
		console.error(e);
		if (errorHandler) errorHandler(e);
	}
}
