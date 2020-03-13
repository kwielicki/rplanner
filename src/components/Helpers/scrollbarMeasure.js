export const scrollBarSize = () => {
	const { body } = document;
	const scrollDiv = document.createElement('div');

    scrollDiv.setAttribute('style', 'width: 1337px; height: 1337px; position: absolute; left: -9999px; overflow: scroll;')
	body.appendChild(scrollDiv);

	const calculateValue = (type) => scrollDiv[`offset${type}`] - scrollDiv[`client${type}`];
	const scrollbarWidth = calculateValue('Width');
	const scrollbarHeight = calculateValue('Height');

	body.removeChild(scrollDiv);

	return {
		width: scrollbarWidth,
		height: scrollbarHeight
	}
}