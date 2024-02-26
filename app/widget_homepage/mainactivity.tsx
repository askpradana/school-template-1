import { Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function MainActivity() {
	return (
		<Flex direction="column" className="px-12">
			<Text className="uppercase" weight="bold">
				Kegiatan Sekolah
			</Text>

			<div className="gap-8 py-12 grid grid-cols-2">
				<SingleCard
					title="Kegiatan 1"
					desc="Some desc I still not know what to write, feel free to add or conenct this to backend"
				/>
				<SingleCard
					title="Kegiatan 2"
					desc="Some desc I still not know what to write, feel free to add or conenct this to backend"
				/>
				<SingleCard
					title="Kegiatan 3"
					desc="Some desc I still not know what to write, feel free to add or conenct this to backend"
				/>
				<SingleCard
					title="Kegiatan 4"
					desc="Some desc I still not know what to write, feel free to add or conenct this to backend"
				/>
			</div>
		</Flex>
	);
}

interface Props {
	title: string;
	desc: string;
}

function SingleCard(prop: Props) {
	return (
		<Card className="p-2 md:p-4">
			<Flex wrap="wrap" gap="4">
				<Image
					src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
					alt="Mock img"
					width={240}
					height={100}
					className="object-cover w-full md:w-48"
				/>
				<Text as="p" className="w-full md:w-auto">
					<Strong>{prop.title}</Strong> {prop.desc}
				</Text>
			</Flex>
		</Card>
	);
}
