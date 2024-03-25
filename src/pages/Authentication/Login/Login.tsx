import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TbHomeBolt } from "react-icons/tb";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { LoginSchema, LoginSchemaType } from "../LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../lib/firebase/firebaseConfig";

const Login = () => {
	const [togglePassword, setTogglePassword] = useState<boolean>(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		resetField,
	} = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
	const { email, password } = watch();

	const onSubmit: SubmitHandler<LoginSchemaType> = async ({
		email,
		password,
	}) => {
		console.log(email, password);
		resetField("email");
		resetField("password");

		// Login logic
		try {
			const userCredential = await signInWithEmailAndPassword(
				FIREBASE_AUTH,
				email,
				password
			);
			const user = userCredential.user;
			localStorage.setItem("token", user.accessToken);
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleButtonToggle = () => {
		setTogglePassword(!togglePassword);
	};

	return (
		<div className="h-screen flex flex-col items-center justify-center bg-white">
			<div className="max-w-[530px] w-11/12 gap-4 text-slate-800 flex flex-col justify-center">
				{/* Logo & Title */}
				<div className="w-full flex flex-col justify-center items-center text-center">
					<TbHomeBolt size={64} />
					<h1 className="text-2xl font-bold">Smart Home System</h1>
					<p className="font-light text-md">
						Enhance your home with at touch of technology
					</p>
				</div>
				{/* Form */}
				<form
					className="w-full flex flex-col space-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-1">
						<label className="font-semibold text-lg">Email</label>
						<input
							className="w-full border-b-2 border-slate-800 p-2 outline-none rounded"
							placeholder="Email"
							required
							{...register("email")}
						/>
						{errors.email && (
							<span className="text-red-500 text-sm">
								{errors.email.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1 text-slate-800">
						<label className="font-semibold text-lg">Password</label>
						<div className="flex items-center ">
							<input
								className="w-full border-b-2 border-slate-800 p-2 outline-none rounded-l"
								type={togglePassword ? "text" : "password"}
								placeholder="Password"
								required
								{...register("password")}
							/>
							<button
								type="button"
								onClick={handleButtonToggle}
								className="border-b-2 border-slate-800 hover:text-slate-700 duration-200 p-2 rounded-r"
							>
								{togglePassword ? (
									<IoEyeOffOutline size={24} />
								) : (
									<IoEye size={24} />
								)}
							</button>
						</div>
						{errors.password && (
							<span className="text-red-500 text-sm">
								{errors.password.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<button
							disabled={!email || !password}
							type="submit"
							className="bg-slate-800 hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed duration-200 text-slate-200 p-2 rounded font-bold cursor-pointer"
						>
							Sign In
						</button>
						<span className="text-sm text-blue-500 underline">
							<Link to="/register">Not yet registered?</Link>
						</span>
					</div>
				</form>
				{/* Footer */}
				<div>
					<p className="text-md text-center">
						Copyright &copy; {new Date().getFullYear()} BCP
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
