import "./Cart.css"
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../components/Icons.jsx";
import { useCart } from '../hooks/useCart.js'

function CarItem({ thumbnail, price, title, quantity, addToCart }) {

	return (
		<li>
			<img src={thumbnail}
				alt={title} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>
			<footer>
				<small>Qty: {quantity}</small>
				<button onClick={addToCart}> + </button>
			</footer>
		</li>
	)
}

export function Cart() {
	const carCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();



	return (
		<>
			<label className="cart-button" htmlFor={carCheckboxId}>
				<CartIcon />
			</label>
			<input id={carCheckboxId} type="checkbox" hidden />

			<aside className="cart">
				<ul>
					{
						cart.map(product => (
							<CarItem key={product.id}
								addToCart={() => addToCart(product)}
								{...product} />
						))
					}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}