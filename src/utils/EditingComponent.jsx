import { Link } from "react-router-dom";
import "./EditingComponent.scss"

const EditingComponent = ({ item }) => {
	return (
		<div className="editing">
			<div className="editing__items">
				{item.map((item, index) => {
					return (
						<Link key={index} className="editing__item" to={item.to}>
							<h2>{item.title}</h2>
							<img src={item.img} alt={item.img} />
						</Link>
					)
				})}
			</div>
		</div>
	);
}

export default EditingComponent;