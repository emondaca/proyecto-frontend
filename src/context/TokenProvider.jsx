import { useState  } from "react";

import { TokenContext } from "./Context"

// eslint-disable-next-line react/prop-types
const TokenProvider = ({ children }) => {
    const [tokenPresente, setTokenPresente] = useState(false)

    return (
        <TokenContext.Provider value={{ tokenPresente, setTokenPresente }}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenProvider
