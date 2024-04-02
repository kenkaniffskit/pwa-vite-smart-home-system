import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from "@alan-ai/alan-sdk-web/dist/AlanButton";
import { ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { FIREBASE_DB } from "../lib/firebase/firebaseConfig";
import useFirebase from "./useFirebase";

const useAlan = () => {
	const [alanInstance, setAlanInstance] = useState<AlanButton>();
	const { isOpen } = useFirebase();

	useEffect(() => {
		if (alanInstance != null) return;
		setAlanInstance(
			alanBtn({
				key: "dc17a27e58cf7b5507f1e21db40721bf2e956eca572e1d8b807a3e2338fdd0dc/stage",
				onCommand: ({ command }: any) => {
					if (command == "on-light-1") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), !isOpen);
					}
					if (command == "off-light-1") {
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), isOpen);
					}
					if (command == "on-light-2") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), !isOpen);
					}
					if (command == "off-light-2") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), isOpen);
					}
					if (command == "on-light-3") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), !isOpen);
					}
					if (command == "off-light-3") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), isOpen);
					}
					if (command == "on-light-4") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), !isOpen);
					}
					if (command == "off-light-4") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), isOpen);
					}
					if (command == "on-all-lights") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), !isOpen);
					}
					if (command == "off-all-lights") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), isOpen);
					}
					if (command == "on-network-1") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), !isOpen);
					}
					if (command == "off-network-1") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), isOpen);
					}
					if (command == "on-network-2") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), !isOpen);
					}
					if (command == "off-network-2") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), isOpen);
					}
					if (command == "on-all-network") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), !isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), !isOpen);
					}
					if (command == "off-all-network") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), isOpen);
					}
					if (command == "on-fan-1") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/FAN_1`), !isOpen);
					}
					if (command == "off-fan-1") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/FAN_1`), isOpen);
					}
					if (command == "on-all-devices") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), !isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), !isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), !isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), !isOpen);
						set(ref(FIREBASE_DB, `switches/FAN_1`), !isOpen);
					}
					if (command == "off-all-devices") {
						console.log(`command: ${command}`);
						set(ref(FIREBASE_DB, `switches/LIGHT_1`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_2`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_3`), isOpen);
						set(ref(FIREBASE_DB, `switches/LIGHT_4`), isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_1`), isOpen);
						set(ref(FIREBASE_DB, `switches/NETWORK_2`), isOpen);
						set(ref(FIREBASE_DB, `switches/FAN_1`), isOpen);
					}
				},
			})
		);
	}, [alanInstance, isOpen]);
	return null;
};

export default useAlan;
