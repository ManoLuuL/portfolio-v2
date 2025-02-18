import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { BsPinMap, BsDownload } from "react-icons/bs";
import { SocialLinks } from "../social-links";

export const Header = () => {
	return (
		<motion.header
			className="text-muted-foreground"
			initial={{ y: -5, opacity: 0.5 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 100, damping: 15 }}
		>
			<section className="mb-2 justify-between flex items-center">
				<h2 className="text-[44px] font-bold">Luis Ricardo</h2>
				<div className="hidden md:flex" />
			</section>

			<section className="flex items-center justify-between mb-1">
				<h3 className="text-muted-foreground text-2xl">Software Engineer</h3>
				<div className="flex md:hidden" />
			</section>

			<h3 className="flex gap-1 items-center font-semibold">
				<BsPinMap className="size-4" /> São Paulo, Brazil
			</h3>

			<section className="flex gap-4 mt-4">
				<Button
					variant="ghost"
					endContent={<BsDownload className="size-4" />}
					className="text-white data-[hover=true]:!bg-gray-700/50"
				>
					<a href="profile.pdf" download={true}>
						Resume
					</a>
				</Button>

				<SocialLinks />
			</section>
		</motion.header>
	);
};
