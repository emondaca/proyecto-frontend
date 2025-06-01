import { useState  } from "react";

import { UserContext } from "./Context"

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    return (
        <UserContext.Provider value={{email, setEmail, password, setPassword,  user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider