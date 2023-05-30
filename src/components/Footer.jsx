
import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css';

export function Footer() {
	const { filters } = useFilters();
	const { cart } = useCart();

	return (
		<footer className='footer'>
			{
				JSON.stringify(cart, null, 2)
			}
			{/* <h4>Prueba técnica React</h4>
            <span>@lOrTeGal</span>
            <h5>Shopping Cart con useContext & useReduce</h5> */}
		</footer>
	)
}