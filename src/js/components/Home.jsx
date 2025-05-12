import React, { useState } from "react";

const Home = () => {
	const [seconds, setSeconds] = useState(0); // Contador de segundos
	const [isActive, setIsActive] = useState(false); // Estado para saber si el contador está activo
	const [targetSeconds, setTargetSeconds] = useState(null); // Segundos objetivo
	let intervalId = null; // Variable para guardar el intervalo

	// Función para iniciar o detener el contador
	const toggleCounter = () => {
		if (isActive) {
			clearInterval(intervalId); // Detener el intervalo
		} else {
			intervalId = setInterval(() => {
				setSeconds((prev) => {
					if (targetSeconds !== null && prev + 1 >= targetSeconds) {
						clearInterval(intervalId); // Detener el contador si se alcanza el objetivo
						setIsActive(false); // Cambiar el estado a inactivo
						return targetSeconds; // Asegurar que no pase del objetivo
					}
					return prev + 1; // Incrementar el contador
				});
			}, 1000);
		}
		setIsActive(!isActive); // Cambiar el estado de activo/inactivo
	};

	// Función para reiniciar el contador
	const resetCounter = () => {
		clearInterval(intervalId); // Detener el intervalo
		setSeconds(0); // Reiniciar el contador
		setTargetSeconds(null); // Reiniciar el objetivo
		setIsActive(false); // Cambiar el estado a inactivo
	};

	// Función para manejar el cambio en el input
	const handleTargetChange = (e) => {
		setTargetSeconds(Number(e.target.value)); // Guardar el objetivo
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