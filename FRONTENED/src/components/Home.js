import React from 'react'
import { useContext } from 'react';
import {noteContext} from '../context/ContextState';
import Notes from './Notes';

function Home() {
    const context = useContext(noteContext);
    const {state} = context;
    console.log(state);
    return (
        <div>
            <div className="w-100">
            <h1 className="my-5 text-center"> iNotebook App. </h1>
            <h4 className="my-5 text-center"> Here are your notes.</h4>
            <div className="row w-75 m-auto">
            {state.map((element,index)=>{
            return <Notes key={index} title={element.title} description={element.description}/>
            })}
            </div>
        </div>
        </div>
    )
}

export default Home;