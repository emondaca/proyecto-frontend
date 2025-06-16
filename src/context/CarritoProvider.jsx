import { useState} from "react"
import { CarritoContext } from './Context'

// eslint-disable-next-line react/prop-types
const CarritoProvider = ({ children }) => {
    const [productosCarro, setProductosCarro] = useState([]);
    /*const [productsCount, setProductsCount] = useState();*/
    return (
        <CarritoContext.Provider value={{productosCarro, setProductosCarro}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoProvider