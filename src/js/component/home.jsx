import React,{useState} from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [color1,setColor1]=useState("btn-danger");
	const [color2,setColor2]=useState("btn-warning");
	const [color3,setColor3]=useState("btn-success");

	
	

	function cambiarColor() {
		color1==="btn-danger" ? setColor1("btn-danger") : setColor1("btn-dark")
	
	};
	
	function cambiarColor2() {
		color2==="btn-warning" ? setColor2("btn-warning") : setColor2("btn-dark")
	
	};
	
	function cambiarColor3() {
		color3==="btn-success" ?setColor3("btn-success") : setColor3("btn-dark")
	
	};
	
	
	
	return (
		<div className="container">
			<button href="#" className={"light1 btn "+ color1} onClick={cambiarColor}>
				
			</button>
			<button href="#" className={"light2 btn "+ color2} onClick={cambiarColor2}>
				
			</button>
			<button href="#" className={"light3 btn "+ color3} onClick={cambiarColor3}>
				
			</button>
		
		</div>
	);
};

export default Home;
