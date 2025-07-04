import MDXComponents from "@theme-original/MDXComponents";

import { ExampleGrid, CommentCol, CodeCol } from "@site/src/components/CustomFeatures/ExampleGrid";
import { TermTable, TermCol, DefCol } from "@site/src/components/CustomFeatures/TermTable";
import Topic from "@site/src/components/CustomFeatures/Topic";

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

	TermTable,
  TermCol,
  DefCol,
	Topic,

	FooterCopyright,
	DocCardList,
	Details,
	Tabs,
	TabItem,
};
