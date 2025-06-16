import { useState  } from "react";

import { ClientContext } from "./Context"

// eslint-disable-next-line react/prop-types
const ClientProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    return (
        <ClientContext.Provider value={{email, setEmail, password, setPassword,  user, setUser}}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientProvider