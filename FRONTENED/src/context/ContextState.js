import React from 'react'
// import noteContext from './Context.js';
import { createContext,useState,useEffect } from 'react';
import { allNotes } from '../components/Axios/axiox';

export const noteContext = createContext();
function ContextState(props){
    useEffect(() => {
        fetchNotes();
    }, [])
    const fetchNotes = async()=>{
        const response = await allNotes();
        const data = response.data;
        setstate(data);
    }
    const initialState = [
    ]

    const [state, setstate] = useState(initialState);
    return (
    <noteContext.Provider value={{state,setstate}}>
        {props.children}
    </noteContext.Provider>
    )
}

export {ContextState};
// export default {ContextState , noteContext};
