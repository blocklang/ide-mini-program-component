import { create, tsx } from "@dojo/framework/core/vdom";
import { PageProperties } from "@blocklang/mini-program-component/page";
import App from "@blocklang/mini-program-component/app";
import ide from "@blocklang/designer-core/middleware/ide";

const factory = create({ ide }).properties<PageProperties>();

export default factory(function index({ properties, children, middleware: { ide } }) {
	const { navigationBarBackgroundColor = "#000000", navigationBarTitleText } = properties();
	const window = { navigationBarBackgroundColor, navigationBarTitleText };
	ide.config("page");
	ide.measureActiveWidget();

	return (
		<App window={window}>
			<div key="page">{children()}</div>
		</App>
	);
});
