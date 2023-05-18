
import './Footer.css';

export function Footer({filters}){
    return(
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>Prueba técnica React</h4>
            <span>@lOrTeGal</span>
            <h5>Shopping Cart con useContext & useReduce</h5> */}
        </footer>
    )
}