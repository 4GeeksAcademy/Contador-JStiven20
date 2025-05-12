import React, { useState } from "react";

const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [targetSeconds, setTargetSeconds] = useState(null);
	let intervalId = null;


	const toggleCounter = () => {
		if (isActive) {
			clearInterval(intervalId);
		} else {
			intervalId = setInterval(() => {
				setSeconds((prev) => {
					if (targetSeconds !== null && prev + 1 >= targetSeconds) {
						clearInterval(intervalId);
						setIsActive(false);
						return targetSeconds;
					}
					return prev + 1;
				});
			}, 1000);
		}
		setIsActive(!isActive);
	};

	const resetCounter = () => {
		clearInterval(intervalId);
		setSeconds(0);
		setTargetSeconds(null);
		setIsActive(false);
	};

	const handleTargetChange = (e) => {
		setTargetSeconds(Number(e.target.value));
	};

	return (
		<div className="text-center">
			<h2>Contador: {seconds}s</h2>
			<button onClick={toggleCounter}>
				{isActive ? "Parar" : "Iniciar"}
			</button>
			<button onClick={resetCounter}>Reset</button>
			<div style={{ marginTop: "20px" }}>
				<input
					type="number"
					placeholder="Segundos objetivo"
					onChange={handleTargetChange}
					style={{ marginRight: "10px", padding: "5px" }}
				/>
			</div>
		</div>
	);
};

export default Home;