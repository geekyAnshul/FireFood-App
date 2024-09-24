const {createContext } = require("react");

//createcontext is used to make object as a global thing which can be accessible by anywhere in any component
const UserContext = createContext({   //createContext({ key: "value"})
    loggedIn : "Anshul Namdev",
})

export default UserContext