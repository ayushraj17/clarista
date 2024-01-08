import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClaristaCopilot = () => {
	return (
		<div>
			<Typography variant="title1" className="text-center">
				Clarista Copilot
			</Typography>
			<Typography variant="strong">
				Clarista is the bridge between data platforms and personalized insights.
				It is uniquely designed to meet the analytics demands of today’s
				businesses through one configurable solution.
			</Typography>
		</div>
	);
};

const cardData = [
	{
		name: "Clarista Navigator",
		role: "For Analysts",
		message:
			"Leverage GPT powered natural language queries for your data lakes and warehouses. Analyze real-time data from any source.",
		action: "Learn More",
		actionLink: "/navigator",
	},
	{
		name: "Clarista Lab",
		role: "For Engineers & Scientists",
		message:
			"Create custom metrics & drive AI/ML insights using drag-n-drop transformers. Automate data/ML ops with configurable workflows",
		action: "Learn More",
		actionLink: "/lab",
	},
	{
		name: "Clarista Pulse",
		role: "For Management & Customers",
		message:
			"Meet the new generation of visual analytics, running live against multiple data sources, with scenario analysis & drill- throughs.",
		action: "Learn More",
		actionLink: "/pulse",
	},
];

const Card = ({
	action,
	actionLink,
	message,
	name,
	role,
}: (typeof cardData)[0]) => {
	return (
		<div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg">
			<Typography variant="title3">{name}</Typography>
			<Typography variant="title4">{role}</Typography>
			<Typography className="text-center">{message}</Typography>
			<Button className="w-full mt-3">{action}</Button>
		</div>
	);
};

const PlugAndPlay = () => {
	return (
		<Container>
			<Typography variant="title1" className="text-center">
				Plug-n-Play Modules
			</Typography>
			<Typography variant="strong">
				Clarista easily integrates with your cloud platform and your data
				sources. The plug-n-play modules give you the flexibility to analyze
				data using different techniques from GPT-powered search to AI/ML models.
			</Typography>
			<div className="grid grid-cols-3 gap-4">
				{cardData.map((item) => (
					<Card {...item} key={item.name} />
				))}
			</div>
		</Container>
	);
};

const TabContentCard = ({
	title,
	list,
	imgSrc,
}: {
	title: string;
	list: string[];
	imgSrc: string;
}) => {
	return (
		<Container>
			<div className="grid grid-cols-2 justify-between">
				<div>
					<Typography variant="largeTitle">{title}</Typography>
					<ul>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				{/* <Image src={imgSrc} alt={`${title}-image`} /> */}
			</div>
		</Container>
	);
};

const TabSection = () => {
	return (
		<Tabs
			defaultValue="Semantics"
			activationMode="automatic"
			className="mx-auto w-full"
		>
			<TabsList>
				<TabsTrigger value="Semantics">Semantics</TabsTrigger>
				<TabsTrigger value="AI">AI</TabsTrigger>
				<TabsTrigger value="Quality">Quality</TabsTrigger>
				<TabsTrigger value="Security">Security</TabsTrigger>
				<TabsTrigger value="Integrations">Integrations</TabsTrigger>
			</TabsList>
			<TabsContent value="Semantics">
				<TabContentCard
					imgSrc="/assets/semantics.png"
					title="Clarista uses a patented Semantics technology to drive all analytics using business meta-data, making your business analytics free of technical data formats and terminology."
					list={[
						"Proprietary GenAI to convert natural language queries into multi-source data queries.",
						"Integrated Data Catalog to publish source independent business data products, that can be analyzed real - time.",
						"Integrated Data Dictionary to convert technical data to business language.",
						"High performing query engine to handle complex queries and large data volumes seamlessly.",
					]}
				/>
			</TabsContent>
			<TabsContent value="AI">
				<TabContentCard
					title="Leverage the power of AI to enrich user experience and produce unique insights for your business."
					imgSrc="/assets/ai.png"
					list={[
						"Natural language queries – make data human again. Use advanced language	models to query data without compromising with your data security and privacy.",
						"Predictive power – go beyond what has happened to what may happen. Leverage Clarista’s data science service and work-bench to discover unique insights.",
						"Anomalies – go beyond prescribed data quality rules to get notified on data anomalies using ML models.",
					]}
				/>
			</TabsContent>
			<TabsContent value="Quality">
				<TabContentCard
					title="Leverage automated data profiling and data quality rule engine to assess and manage data quality."
					list={[
						"Real-time data profiling for missing data values",
						"Rule engine to configure custom quality rules.",
						"Advanced AI/ML data quality checks.",
						"Notification engine with audit.",
						"Automation of rules based on time or events.",
					]}
					imgSrc="/assets/quality.png"
				/>
			</TabsContent>
			<TabsContent value="Security">
				<TabContentCard
					title="Comply with your organization’s security posture through Clarista’s multi-layered security architecture."
					list={[
						"Flexible installation options to meet your network security needs.",
						"Authentication through SSO integration.",
						"Authorization controls for data domains and user groups.",
						"Masking controls for PII and sensitive data.",
						"Role based dynamic filtering of data.",
					]}
					imgSrc="/assets/security.png"
				/>
			</TabsContent>
			<TabsContent value="Integrations">
				<TabContentCard
					title="Flexible options to integrate with current platforms and applications."
					list={[
						"Multi-cloud compliant.",
						"Live data connectors – data-lakes, data warehouses, on-premises operational systems.",
						"Integration with 3rd party BI tools – Tableau, Power BI etc.",
						"Proprietary library for Data Science Notebooks.",
						"Integration with existing data catalogs.",
						"REST APIs for application integrations.",
					]}
					imgSrc="/assets/integration.png"
				/>
			</TabsContent>
		</Tabs>
	);
};
const Banner = () => {
	return (
		<div className="bg-blue-500 py-4">
			<Container>
				<Image
					alt="C"
					src="/assets/C-logo-white.png"
					width={128}
					className="mx-auto"
					height={128}
				/>
				<Typography
					htmlElement="p"
					className="text-5xl text-center text-white font-bold leading-tight"
				>
					Are You Ready To Deliver Faster Answers To Your Business And Customers
					From Your Data?
				</Typography>
				<Button className="block mx-auto mt-4" variant="outline" size="lg">
					Try It Out!
				</Button>
			</Container>
		</div>
	);
};

export default function Home() {
	return (
		<main className="flex flex-col gap-4">
			{/* <main className="flex min-h-screen flex-col items-center justify-between"> */}
			<Container>
				<Hero
					title="Simplify Data Amplify Insights"
					subtitle="Meet Clarista: Where Your Data Works for You."
					text="A data analytics platform to collaborate, analyze, and make informed decisions, faster."
					media={
						<video
							src="/assets/Clarista-Home-Page.mp4"
							controls={false}
							autoPlay
							playsInline
							loop
						></video>
					}
					action={<Button className="block">Get Started</Button>}
				/>
			</Container>
			<Container>
				<ClaristaCopilot />
			</Container>
			<Container>
				<PlugAndPlay />
			</Container>
			<Banner />
			<TabSection />
			{/* </main> */}
		</main>
	);
}
