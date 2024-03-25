import { useState } from "react";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const handleClick = () => {
		setToggle(!toggle);
	};

	const data = [
		"Temp & Humidity Sensor",
		"Gas & Smoke Sensor",
		"Motion Sensor",
	];

	return (
		<>
			<Sidebar
				toggle={toggle}
				setToggle={setToggle}
				handleClick={handleClick}
			/>
			<div className="h-screen flex flex-col justify-center items-center p-4 gap-16">
				<h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>
				<div className="flex flex-col items-center gap-4">
					<span className="font-light text-xl text-slate-800">Get started</span>
					<Link to="/switches">
						<span className="text-green-700 text-md bg-green-300 hover:bg-green-200 border border-green-400 rounded px-4 py-2 duration-200">
							Switches
						</span>
					</Link>
				</div>
				<div className="space-y-2">
					<h1 className="font-light text-slate-800">
						Not implemented features:
					</h1>
					<div className="grid lg-grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
						{data.map((item) => {
							return (
								<span
									key={item}
									className="cursor-pointer text-yellow-800 text-sm bg-yellow-200 hover:bg-yellow-300 border border-yellow-400 rounded-full px-3 py-1 duration-200"
								>
									{item}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
