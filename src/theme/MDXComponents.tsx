import MDXComponents from "@theme-original/MDXComponents";

import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";

import Synopsis from "@site/src/components/CustomFeatures/Synopsis";
import {ExampleTable, Description, SampleCode} from "@site/src/components/CustomFeatures/ExampleTable";

import {ExampleGrid, CaseRow, InputRow, SpecRow, OutputRow} from "@site/src/components/CustomFeatures/ExampleGrid";

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

	ExampleTable,
	Description,
	SampleCode,

	ExampleGrid,
	CaseRow,
	InputRow,
	SpecRow,
	OutputRow,

	Highlight,
	ImageFrame,
	Synopsis,

	FooterCopyright,
};
