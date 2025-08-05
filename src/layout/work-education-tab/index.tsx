import { Tabs, Tab } from "@heroui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { WorkExperienceTab } from "./components/work-experience-tab";
import { EducationTab } from "./components/education-tab";

export const WorkEducationTab = () => {
	return (
		<section className="mt-12 w-full">
			<Tabs
				variant="underlined"
				size="lg"
				radius="md"
				fullWidth={true}
				classNames={{
					tabList:
						"gap-6 w-full relative rounded-none p-0 border-b border-gray-100 border-opacity-60",
					cursor: "w-full bg-gray-200",
					tab: "max-w-fit px-0 h-12 data-[hover=true]:text-danger-600",
					tabContent: "group-data-[selected=true]:text-white",
				}}
			>
				<Tab title="Work Experience">
					<AnimatePresence mode="wait">
						<motion.div
							initial={{ x: 10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2 }}
						>
							<WorkExperienceTab />
						</motion.div>
					</AnimatePresence>
				</Tab>
				<Tab title="Education">
					<AnimatePresence mode="wait">
						<motion.div
							initial={{ x: 10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2 }}
						>
							<EducationTab />
						</motion.div>
					</AnimatePresence>
				</Tab>
			</Tabs>
		</section>
	);
};
