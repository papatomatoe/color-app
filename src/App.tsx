import * as React from "react";
import MainLayout from "layouts/MainLayout";
import Section from "components/Section";
import ColorList from "components/ColorList";
import AddColor from "components/AddColor";
import { ContextWrapper } from "context";
const App: React.FC = () => {
	return (
		<ContextWrapper>
			<MainLayout>
				<Section title="Color Rating">
					<ColorList />
				</Section>
				<Section title="Add color">
					<AddColor />
				</Section>
			</MainLayout>
		</ContextWrapper>
	);
};

export default App;
