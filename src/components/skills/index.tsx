import { motion } from "framer-motion";
import { skills } from "./consts";
import { Chip } from "@heroui/chip";

export const Skills = () => {
	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Skills
			</motion.h4>
			<div className="flex gap-2 flex-wrap animate-in fade-in-0 duration-200 select-none">
				{skills.map((skill) => (
					<Chip key={skill} radius="sm" className="px-3 py-1">
						{skill}
					</Chip>
				))}
			</div>
		</section>
	);
};
