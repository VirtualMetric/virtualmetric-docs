import MDXComponents from "@theme-original/MDXComponents";

import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";

import { ImageFrame } from "@site/src/components/CustomFeatures";
import { Highlight } from "@site/src/components/CustomFeatures";

import {Synopsis, Example, Description, SampleCode} from "@site/src/components/CustomFeatures";

export default {
	...MDXComponents,

	ImageFrame,
	Highlight,

	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImage,

	Synopsis,
	Example,
	Description,
	SampleCode,
};
