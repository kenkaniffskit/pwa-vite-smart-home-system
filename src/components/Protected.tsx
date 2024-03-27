import { Navigate, Outlet } from "react-router-dom";
import { useAlan } from "../hooks";

const Protected = () => {
	const token = localStorage.getItem("token");

	useAlan();
	return token ? (
		<>
			<Outlet />
		</>
	) : (
		<>
			<Navigate to="/login" />
		</>
	);
};

export default Protected;
