import MDXComponents from "@theme-original/MDXComponents";

import { ExampleGrid, CommentCol, CodeCol } from "@site/src/components/CustomFeatures/ExampleGrid";
import { TermTable, TermCol, DefCol } from "@site/src/components/CustomFeatures/TermTable";
import ImageFrame from "@site/src/components/CustomFeatures/ImageFrame";
import DocLink from "@site/src/components/CustomFeatures/DocLink";
import FooterCopyright from "./Footer/Copyright";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Details from "./Details";

export default {
	...MDXComponents,

	ExampleGrid,
	CommentCol,
	CodeCol,

	ImageFrame,

	Tabs,
	TabItem,
	FooterCopyright,
	Details,

	TermTable,
  TermCol,
  DefCol,

	DocLink,
};
