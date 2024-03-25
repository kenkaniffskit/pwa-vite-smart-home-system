import { useEffect, useState } from "react";
import { FIREBASE_DB } from "../../lib/firebase/firebaseConfig";
import { onValue, ref, set } from "@firebase/database";
import { TbBulbOff, TbBulbFilled } from "react-icons/tb";

type Props = {
	name: string;
	node: string;
};

const Switch = ({ name, node }: Props) => {
	const [toggle, setToggle] = useState<boolean>();

	const handleClick = () => {
		setToggle(!toggle);
		set(ref(FIREBASE_DB, `switches/${node}`), !toggle);
	};

	useEffect(() => {
		const getValueRef = ref(FIREBASE_DB, `switches/${node}`);
		onValue(getValueRef, (snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				setToggle(data);
				console.log(data);
			} else {
				console.log("No data available!");
			}
		});
	}, [setToggle, node]);

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<p className="font-bold text-slate-800 text-start mb-2 text-sm">{name}</p>
			<button
				type="button"
				onClick={() => {
					handleClick();
				}}
				className={`flex flex-col p-10 border rounded-full ${
					toggle ? "bg-green-100 border-green-200" : "bg-red-100 border-red-200"
				} items-center justify-center aspect-square rounded-full space-y-1`}
			>
				{/* Icon here */}
				<div>
					{toggle ? (
						<TbBulbFilled size={40} className="text-green-800" />
					) : (
						<TbBulbOff className="text-red-800" size={40} />
					)}
				</div>
				<p
					className={`font-bold ${toggle ? "text-green-800 " : "text-red-800"}`}
				>
					{toggle ? "ON" : "OFF"}
				</p>
			</button>
		</div>
	);
};

export default Switch;
