import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import { Home, Login, Register, Dashboard, Switches } from "./pages";
import { Protected } from "./components";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Protected />}>
				<Route path="/" element={<Home />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/switches" element={<Switches />}></Route>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
