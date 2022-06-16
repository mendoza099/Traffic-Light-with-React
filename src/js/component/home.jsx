import React,{useState} from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [color1,setColor1]=useState("btn-dark");
	const [color2,setColor2]=useState("btn-dark");
	const [color3,setColor3]=useState("btn-dark");

	
	

	function cambiarColor() {
		if (color1==="btn-dark"){
			setColor1("btn-danger");
			
		}else{
			setColor1("btn-dark");			
		}if (color2==="btn-warning"){
			setColor2()
		}
	
	};
	
	
	return (
		<div className="container">
			<a href="#" className={"light1 btn "+ color1} onClick={cambiarColor}>
				
			</a>
			<a href="#" className={"light2 btn "+ color2} onClick={cambiarColor}>
				
			</a>
			<a href="#" className={"light3 btn "+ color3} onClick={cambiarColor}>
				
			</a>
		
		</div>
	);
};

export default Home;
