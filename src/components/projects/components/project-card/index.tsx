import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { ProjectCardProps } from "./types";
import { Button } from "@heroui/button";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { Chip } from "@heroui/chip";

export const ProjectCard = (props: ProjectCardProps) => {
	const { description, image, title, skills, source, website } = props;

	return (
		<li className="col-span-2 md:col-span-1 max-h-[33rem] h-fit flex">
			<Card className="size-full bg-transparent text-white border border-gray-300">
				<CardHeader className="p-0">
					<img
						src={image}
						alt="Project display"
						className="w-full rounded-t-xl object-cover h-[13.75rem]"
					/>
				</CardHeader>

				<CardBody>
					<div className="pt-2 pb-6 w-full">
						<h4 className="font-bold">{title}</h4>
						<span className="text-sm">{description}</span>
					</div>

					<section className="flex gap-2 flex-wrap">
						{skills?.length &&
							skills.map((skill) => (
								<Chip
									key={skill}
									className="text-[12px] text-white"
									size="md"
									variant="bordered"
								>
									{skill}
								</Chip>
							))}
					</section>
				</CardBody>

				<CardFooter className="space-x-2">
					{website && (
						<Button size="sm">
							<a
								href={website}
								target="_blank"
								rel="noreferrer"
								className="flex gap-2"
							>
								<BsGlobe /> Website
							</a>
						</Button>
					)}

					{source && (
						<Button size="sm">
							<a
								href={source}
								target="_blank"
								rel="noreferrer"
								className="flex gap-2"
							>
								<BsGithub /> Source
							</a>
						</Button>
					)}
				</CardFooter>
			</Card>
		</li>
	);
};
