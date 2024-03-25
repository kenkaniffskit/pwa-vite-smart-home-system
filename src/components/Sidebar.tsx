import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useEffect, useId, useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../lib/firebase/firebaseConfig";
import { IoLogOutOutline, IoHomeSharp } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

type Props = {
	toggle: boolean;
	handleClick: () => void;
	setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ toggle, setToggle, handleClick }: Props) => {
	const [color, setColor] = useState<boolean>();
	const navigate = useNavigate();
	const id = useId();
	const { pathname } = useLocation();

	const user = localStorage.getItem("user");
	const { email } = JSON.parse(user as string);

	const data = [
		{ name: "Home", route: "/", icon: <IoHomeSharp size={20} /> },
		{ name: "Dashboard", route: "/dashboard", icon: <IoIosSwitch size={20} /> },
		{ name: "Switches", route: "/switches", icon: <MdDashboard size={20} /> },
	];

	useEffect(() => {
		const changeColor = () => {
			window.scrollY >= 90 ? setColor(true) : setColor(false);
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	const Logout = () => {
		signOut(FIREBASE_AUTH);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	};

	return (
		<>
			<nav
				className={`fixed w-full bg-slate-800 text-white z-50 bg-none ${
					color && "bg-customPrimary/50 backdrop-blur-2xl"
				} duration-300`}
			>
				{/* <nav className="fixed w-full text-white z-[999]"> */}
				<div className="w-11/12 py-3 mx-auto flex items-center gap-4">
					<div className="flex items-center justify-center">
						{/* Mobile Menu */}
						<HiBars2
							className="lg:hidden md:hidden block cursor-pointer"
							size={32}
							onClick={() => {
								setToggle(!toggle);
							}}
						/>

						{/* Desktop Menu */}
						<ul className="lg:flex md:flex hidden gap-x-6 font-light">
							{data.map((item) => (
								<li key={item.name}>
									<Link
										to={item.route}
										className={`${
											pathname === item.route && "border-b-2"
										} hover:border-b-2 duration-75`}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{pathname === "/" && <h1>Home</h1>}
					{pathname === "/dashboard" && <h1>Dashboard</h1>}
					{pathname === "/switches" && <h1>Switches</h1>}

					{/* Logo */}
					{/* <Link
						to="/"
						className="flex items-center justify-center"
						onClick={() => {
							setToggle(false);
						}}
					>
						Logo
					</Link> */}
				</div>
			</nav>

			{toggle && (
				<div
					onClick={handleClick}
					className="fixed backdrop-blur-sm backdrop-brightness-50 w-full h-screen z-[60] cursor-pointer"
				></div>
			)}
			<motion.div
				initial={{ left: "-500px" }}
				animate={{ left: toggle ? "0px" : "-500px" }}
				transition={{ ease: "easeInOut" }}
				className={`fixed flex flex-col bg-slate-800 md:hidden bg-customPrimary/90 backdrop-blur-md text-white h-screen w-2/3 z-[1000]`}
			>
				<div className="p-3 mt-2 ml-2">
					<HiXMark
						className="cursor-pointer"
						size={32}
						onClick={() => {
							setToggle(false);
						}}
					/>
				</div>
				<div className="mx-7 mb-2">
					<h1 className="font-bold text-xl">Menu</h1>
				</div>
				<div className="flex flex-col gap-1 mx-4">
					{data.map((item) => (
						<React.Fragment key={id + item.name}>
							<div className="flex flex-col gap-2 text-md font-extralight hover:bg-white/10 duration-300 rounded-sm cursor-pointer">
								<div className="flex items-center text-start pl-2 pt-2 pb-2">
									<Link
										key={item.name}
										to={item.route}
										onClick={() => {
											setToggle(false);
										}}
										className={`flex gap-2 items-center w-full ml-1 pl-2 ${
											item.route === pathname && "border-l-4 border-l-white/100"
										} border-l-4 border-l-white/10`}
									>
										{item.icon} {item.name}
									</Link>
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
				<div className="flex flex-col items-start gap-4 justify-center mx-4 mt-auto mb-4 pt-4">
					<div className="w-full space-y-1 border-b border-b-slate-700 border-t border-t-slate-700 py-4">
						<p className="mx-2 text-sm font-semibold text-slate-200">
							Logged in as:
						</p>
						<p className="mx-2 font-light text-sm text-slate-300">{email}</p>
					</div>
					<button
						onClick={Logout}
						type="button"
						className="w-full flex text-red-400 hover:bg-red-600/25 duration-200 items-center gap-4 px-2 py-2.5 rounded "
					>
						<IoLogOutOutline size={20} />
						Logout
					</button>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;
