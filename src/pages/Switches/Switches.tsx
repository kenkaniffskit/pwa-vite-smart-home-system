import { useState } from "react";
import { Sidebar } from "../../components";
import Switch from "./Switch";
import { data } from "./constants";

const Switches = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleClick = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<Sidebar
				toggle={toggle}
				setToggle={setToggle}
				handleClick={handleClick}
			/>
			<div className="h-screen grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pt-16">
				{data.map((item) => {
					return <Switch key={item.id} {...item} />;
				})}
			</div>
		</>
	);
};

export default Switches;
