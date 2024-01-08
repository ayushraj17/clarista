import React from "react";
import Typography from "@/components/ui/typography";

type Props = {
	title: string;
	subtitle: string;
	text: string;
	media: React.ReactNode;
	action: React.ReactNode;
};
const Hero = ({ title, subtitle, text, media, action }: Props) => {
	return (
		<div className="flex justify-between mt-10">
			<div>
				<Typography variant="title1">{title}</Typography>
				<Typography variant="title4">{subtitle}</Typography>
				<Typography variant="body">{text}</Typography>
				{action}
			</div>
			{media}
		</div>
	);
};

export default Hero;
