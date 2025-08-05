import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./components/project-card";
import { Button } from "@heroui/button";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { projectsRepos } from "./consts";
import { twMerge } from "tailwind-merge";

export const Projects = () => {
	const [isShowingAll, setIsShowingAll] = useState(false);
	const [fullHeight, setFullHeight] = useState(0);

	const ulRef = useRef<HTMLUListElement>(null);

	const toggleShowAll = () => {
		setIsShowingAll((prev) => !prev);
	};

	useEffect(() => {
		if (!ulRef.current) {
			return;
		}

		setFullHeight(ulRef.current.scrollHeight);
	}, []);

	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Projects
			</motion.h4>

			<ul
				ref={ulRef}
				className={twMerge("grid grid-cols-2 gap-x-4 gap-y-10 overflow-hidden transition-[height] animate-in fade-in-0 duration-200", isShowingAll && 'h-full')}
				style={{
					height: isShowingAll ? fullHeight : 560,
				}}
			>
				{projectsRepos.map((item, index) => (
					<ProjectCard key={index} {...item} />
				))}
			</ul>

			<div className="flex items-center justify-center mx-2 mt-4">
				<Button
					variant="ghost"
					className="group text-white data-[hover=true]:!bg-gray-700/50"
					onPress={toggleShowAll}
				>
					{isShowingAll ? (
						<>
							View Less
							<BsArrowUpShort className="size-4 transition-transform group-hover:-translate-y-0.5" />
						</>
					) : (
						<>
							View More
							<BsArrowDownShort className="size-4 transition-transform group-hover:translate-y-0.5" />
						</>
					)}
				</Button>
			</div>
		</section>
	);
};
