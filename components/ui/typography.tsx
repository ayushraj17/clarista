import React from "react";

export type Variant =
	| "largeTitle"
	| "title1"
	| "title2"
	| "title3"
	| "title4"
	| "subtitle1"
	| "subtitle2"
	| "largeBody"
	| "body"
	| "strong"
	| "emphasized"
	| "smallBody"
	| "strongSmallBody"
	| "button"
	| "preTitle";

interface TypographyProps {
	variant?: Variant;
	children: React.ReactNode;
	/**
	 * Use it when you need styles of a particular variant but render it as different HTML element
	 */
	htmlElement?: keyof JSX.IntrinsicElements;
	className?: string;
}

const Typography: React.FC<TypographyProps> = ({
	variant = "body",
	children,
	htmlElement,
	className,
}) => {
	// Define Tailwind CSS classes based on the variant prop
	let classNames = "";
	let Element: keyof JSX.IntrinsicElements = "span"; // Default to a <span> element

	switch (variant) {
		case "largeTitle":
			classNames = "text-xl font-semibold";
			Element = "h1";
			break;
		case "title1":
			classNames = "text-5xl font-semibold";
			Element = "h2";
			break;
		case "title2":
			classNames = "text-2xl font-semibold";
			Element = "h3";
			break;
		case "title3":
			classNames = "text-xl font-semibold";
			Element = "h4";
			break;
		case "title4":
			classNames = "text-lg font-semibold";
			Element = "h5";
			break;
		case "subtitle1":
			classNames = "text-base font-semibold";
			Element = "h6";
			break;
		case "subtitle2":
			classNames = "text-sm font-semibold";
			break;
		case "largeBody":
			classNames = "text-lg";
			break;
		case "body":
			classNames = "text-base";
			break;
		case "strong":
			classNames = "font-semibold";
			break;
		case "emphasized":
			classNames = "font-bold";
			break;
		case "smallBody":
			classNames = "text-sm";
			break;
		case "strongSmallBody":
			classNames = "text-sm font-semibold";
			break;
		case "button":
			classNames =
				"text-base font-semibold bg-blue-500 text-white px-4 py-2 rounded-full";
			Element = "button";
			break;
		case "preTitle":
			classNames = "text-xs uppercase tracking-widest font-semibold";
			break;
		default:
			classNames = "text-base";
	}

	return React.createElement(
		htmlElement || Element,
		{ className: classNames + " " + className },
		children
	);
};

export default Typography;
