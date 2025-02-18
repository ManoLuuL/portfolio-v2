import { Button } from "@heroui/button";
import { SocialLinkProps } from "./types";

export const SocialLink = (props: SocialLinkProps) => {
	const { href, icon: Icon } = props;

	return (
		<li className="grid place-content-center size-[18px] cursor-pointer">
			<Button
				variant="ghost"
				size="md"
				className="rounded-full text-white data-[hover=true]:!bg-gray-700/50"
				isIconOnly={true}
			>
				<a href={href} target="_blank" rel="noopener noreferrer">
					<Icon className="size-full" />
				</a>
			</Button>
		</li>
	);
};
