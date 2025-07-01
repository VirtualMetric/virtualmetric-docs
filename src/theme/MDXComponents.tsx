import MDXComponents from "@theme-original/MDXComponents";

import { ExampleGrid, CommentCol, CodeCol } from "@site/src/components/CustomFeatures/ExampleGrid";
import { TermTable, TermCol, DefCol } from "@site/src/components/CustomFeatures/TermTable";

import FooterCopyright from "@theme/Footer/Copyright";
import DocCardList from "@theme/DocCardList";
import Details from "@theme/Details";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default {
	...MDXComponents,

	ExampleGrid,
	CommentCol,
	CodeCol,

	FooterCopyright,
	Details,

	TermTable,
  TermCol,
  DefCol,

	Tabs,
	TabItem,
	DocCardList,
};
