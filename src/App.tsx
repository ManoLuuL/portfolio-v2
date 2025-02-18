import { Container } from "./components/container";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { WorkEducationTab } from "./components/work-education-tab";

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
