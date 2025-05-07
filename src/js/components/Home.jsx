import React, { useEffect, useState } from "react";

//creamos el primer componente
const Home = () => {
	//creamos un useState que se inicie en 0
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSeconds(prevSecond => prevSecond + 1)
		}, 1000);
	}, [])

	return (
		<div className="text-center">
			<h2>Contador : {seconds}s</h2>
		</div>
	);
};

export default Home;