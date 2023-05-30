import "./Cart.css"
import { useId } from "react";
import { CartIcon,  ClearCartIcon } from "../components/Icons.jsx";

export function Cart() {
	const carCheckboxId = useId();
	return (
		<>
			<label className="cart-button" htmlFor={carCheckboxId}>
				<CartIcon />
			</label>
			<input id={carCheckboxId} type="checkbox" hidden/>

			<aside className="cart">
				<ul>
					<li>
						<img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
						alt="Iphone" />
						<div>
							<strong>iPhone</strong> - $1499
						</div>
						<footer>
							<small>Qty: 1</small>
							<button> + </button>
						</footer>
					</li>
				</ul>
					<button><ClearCartIcon/></button>
			</aside>
		</>
	)
}