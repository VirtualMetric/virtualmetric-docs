import MDXComponents from "@theme-original/MDXComponents";

import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";

import {
	Example,
	Description,
	Highlight,
	ImageFrame,
	SampleCode,
	Synopsis,
} from "@site/src/components/CustomFeatures";

export default {
	...MDXComponents,

	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImage,

	Example,
	Description,
	Highlight,
	ImageFrame,
	SampleCode,
	Synopsis,
};
