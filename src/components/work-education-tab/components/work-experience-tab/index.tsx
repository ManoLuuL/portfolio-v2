import { motion } from "framer-motion";
import { containerVariants } from "../../consts";
import { workExperienceTabData } from "./consts";

export const WorkExperienceTab = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="flex flex-col gap-y-6"
		>
			{workExperienceTabData.map((item, index) => {
				const { company, qualification, years } = item;

				return (
					<div key={index} className="flex gap-x-9 group">
						<div className="h-[84px] w-[1px] bg-gray-300 relative ml-2">
							<div className="w-[11px] h-[11px] rounded-full bg-gray-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
						</div>
						<div>
							<div className="font-semibold text-xl leading-none mb-2">
								{company}
							</div>
							<div className="text-lg leading-none text-muted-foreground mb-1">
								{qualification}
							</div>
							<div className="text-base font-medium">{years}</div>
						</div>
					</div>
				);
			})}
		</motion.div>
	);
};
