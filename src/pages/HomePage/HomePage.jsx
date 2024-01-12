import { homeData } from "../../data/data";
import EditingComponent from "../../utils/EditingComponent";
import "./HomePage.scss"


const HomePage = () => {
	return (
		<EditingComponent item={homeData}></EditingComponent>
	);
}

export default HomePage;