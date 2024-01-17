// Only for test

const delay = async <T>(promise: Promise<T>, timeout = 1000): Promise<T> => {
	await new Promise(resolve => setTimeout(resolve, timeout));
	return await promise;
};
export default delay;
