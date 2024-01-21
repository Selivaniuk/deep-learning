type Mods = Record<string, boolean | string | undefined | null>;

const classNames = (
	args: Array<Mods | string | undefined | null> = [],
): string => {
	if (args.length === 0) {
		return '';
	}

	const result: string[] = [];

	args.forEach(arg => {
		if (arg === undefined || arg === null) {
			return;
		}
		if (typeof arg === 'string' && arg.length > 0) {
			result.push(arg);
		} else {
			const trueValues = Object.entries(arg).filter(([_, value]) =>
				Boolean(value),
			);

			if (trueValues.length > 0) {
				const cls = trueValues
					.map(([className]) => className)
					.join(' ');
				result.push(cls);
			}
		}
	});
	return result.join(' ');
};

export default classNames;

// const classNamesOld = (
// 	cls: string = '',
// 	mods: Mods = {},
// 	additional: string[] = [],
// ): string => {
// 	return [
// 		cls,
// 		...additional,
// 		...Object.entries(mods)
// 			.filter(([_, value]) => Boolean(value))
// 			.map(([className]) => className),
// 	].join(' ');
// };
