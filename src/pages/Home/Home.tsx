import { useState } from "react";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleClick = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<Sidebar
				toggle={toggle}
				handleClick={handleClick}
				setToggle={setToggle}
			/>
			<div className="h-screen flex flex-col justify-center items-center p-4 gap-16">
				<h1 className="text-4xl font-bold text-slate-800">Welcome</h1>
				<div className="flex flex-col items-center gap-4">
					<span className="font-light text-xl text-slate-800">Get started</span>
					<Link to="/switches">
						<span className="text-green-700 text-md bg-green-300 hover:bg-green-200 border border-green-400 rounded px-4 py-2 duration-200">
							Switches
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
