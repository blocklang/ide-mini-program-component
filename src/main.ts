import * as blocklang from "@blocklang/designer-core/blocklang";
import { ExtensionWidgetMap, GitUrlSegment } from "@blocklang/designer-core/interfaces";
import AppPreview from "@blocklang/mini-program-component/app";
import AppIde from "./app";
import PagePreview from "@blocklang/mini-program-component/page";
import PageIde from "./page";
import { widgetInstanceMap } from "@dojo/framework/core/vdom";

const gitUrlSegment: GitUrlSegment = {
	website: "github.com",
	owner: "blocklang",
	repoName: "ide-mini-program-component",
};
const widgets: ExtensionWidgetMap = {
	App: { widget: AppPreview, ideWidget: AppIde, propertiesLayout: [] },
	Page: { widget: PagePreview, ideWidget: PageIde, propertiesLayout: [] },
};

blocklang.registerWidgets(gitUrlSegment, widgets);
blocklang.cacheWidgetInstanceMap(gitUrlSegment, widgetInstanceMap);
