import react from 'react';
import'./card.css'
export default (props) -> {
	const estilo card - {
		backgroundColor: props.cor,
		borderColor: props. cor
}

return (
<div className-'card' style- {estiloccard}>
   <div classname='title'><h2>{props.titulo}</h2></div>
   <div classname-'content'>
   {props.children}
   </div>
 </div>
 )
}