import { create, v, w } from "@dojo/framework/core/vdom";
import { AppProperties } from "@blocklang/mini-program-component/app";
import ide from "@blocklang/designer-core/middleware/ide";
import theme from "@dojo/framework/core/middleware/theme";
import SystemStatusbar from "@blocklang/mini-program-component/app/SystemStatusbar";
import MiniProgramNavigator from "@blocklang/mini-program-component/app/MiniProgramNavigator";
import * as css from "@blocklang/mini-program-component/theme/default/app.m.css";

const factory = create({ ide, theme }).properties<AppProperties>();

export default factory(function index({ properties, children, middleware: { ide, theme } }) {
	ide.config("root");
	const themedCss = theme.classes(css);
	const { window } = properties();
	const styles: any = {};
	styles.backgroundColor = window?.navigationBarBackgroundColor ?? "#000000";

	return v("div", { key: "root", classes: [theme.variant(), themedCss.root, "h-100"] }, [
		v("div", { styles }, [
			w(SystemStatusbar, {}),
			w(MiniProgramNavigator, { title: window?.navigationBarTitleText }),
		]),
		...children(),
		ide.alwaysRenderActiveWidget(),
	]);
});

// <div key="root" classes={[theme.variant(), themedCss.root, "h-100"]}>
// 	<div styles={styles}>
// 		<SystemStatusbar />
// 		<MiniProgramNavigator title={window?.navigationBarTitleText} />
// 	</div>
// 	{children()}
// </div>
