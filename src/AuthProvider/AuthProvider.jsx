import React, { createContext, useState } from 'react';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const googleProvider = new GoogleAuthProvider();

    const AuthInfo = {
        user,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;