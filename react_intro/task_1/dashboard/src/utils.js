import HolbertonLogo from './HolbertonLogo.jpg';
import './App.css';

function getFullYear() {
	return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
	if (isIndex === true){
					return ("Holberton School");
	}else{
					return ("Holberton School main dashboard");
	}
}
