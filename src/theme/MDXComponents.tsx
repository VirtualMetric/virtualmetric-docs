import MDXComponents from "@theme-original/MDXComponents";

import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";

import {ExampleGrid, CommentCol, CodeCol} from "@site/src/components/CustomFeatures/ExampleGrid";

import ImageFrame from "@site/src/components/CustomFeatures/ImageFrame";
import Highlight from "@site/src/components/CustomFeatures/Highlight";
import FooterCopyright from "./Footer/Copyright";

export default {
	...MDXComponents,

	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImage,

	ExampleGrid,
	CommentCol,
	CodeCol,

	Highlight,
	ImageFrame,

	FooterCopyright,
};
