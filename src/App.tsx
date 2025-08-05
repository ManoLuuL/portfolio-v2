import { Container } from "./components/container";
import { Projects } from "./layout/projects";
import { Skills } from "./layout/skills";
import { WorkEducationTab } from "./layout/work-education-tab";

function App() {
	return (
		<Container>
			<WorkEducationTab />
			<Skills />
			<Projects />
		</Container>
	);
}

export default App;
