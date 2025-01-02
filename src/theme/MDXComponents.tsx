import MDXComponents from "@theme-original/MDXComponents";

import { ExampleGrid, CommentCol, CodeCol } from "@site/src/components/CustomFeatures/ExampleGrid";

import ImageFrame from "@site/src/components/CustomFeatures/ImageFrame";

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
};
