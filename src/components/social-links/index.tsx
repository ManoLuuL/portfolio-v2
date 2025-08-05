import { SocialLink } from "./components/social-link";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

export const SocialLinks = () => {
	return (
		<ul className="flex gap-7 items-center w-fit">
			<SocialLink icon={BsGithub} href="https://github.com/manoluul" />
			<SocialLink
				icon={BsLinkedin}
				href="https://www.linkedin.com/in/luisricardocoelhocouto/"
			/>
			<SocialLink icon={BsEnvelope} href="mailto:ticocouto_14@hotmail.com" />
		</ul>
	);
};
