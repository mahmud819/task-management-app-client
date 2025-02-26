import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newTask, setNewTask] = useState("");
    const [columns, setColumns] = useState({ todo: [], inProgress: [], done: [] });
    const [isEditing, setIsEditing] = useState(false);

    //  const [newTitle, setNewTitle] = useState(title );
    
    const googleProvider = new GoogleAuthProvider();


    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const AuthInfo = {
        user,
        loading,
        setLoading,
        createUser,
        userLogin,
        signInWithGoogle,
        userLogOut,
        newTask,
        setNewTask,
        columns,
        setColumns,
        isEditing, 
        setIsEditing,
    }
    useEffect(()=>{
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            
            // if(currentUser?.email){
            //     const user = {email : currentUser.email};
            //     axiosHook.post('/jwt',user,{withCredentials:true})
            //     .then(res=>{
            //         // console.log(res);
            //         setLoading(false);
            //     })
            // }
            // else{
            //     axiosHook.post('/logOut',{},{withCredentials:true})
            //     .then(res=>{
            //         // console.log('log out token',res.data);
            //         setLoading(false);
            //     })

            // }
            
        });
    return()=>{
        unsubscribe()
    }

    },[]) 
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;