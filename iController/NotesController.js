import express from "express";
import Notes from '../models/Notes.js';
import { body, validationResult } from 'express-validator';


const fetchAllNotes = async(req,res)=>{
    try{
    const AllNotes = await Notes.find();
    res.json(AllNotes);
    }catch(error){
        console.error(error.message);
    }
}

const fetchUserNote = async(req,res)=>{
    try{
        const userNotes = await Notes.find({user: req.user.id});
        res.json(userNotes);
    }catch(error){
        console.error(error.message);
    }
}

const addNote = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const { title, description, tag } = req.body;

        // 1st Method Used Earlier to create user.
        // Notes.create({
        //     user: req.user.id,
        //     title: title,
        //     description: description,
        //     tag: tag
        // }).then(notes=>res.json(notes)).catch(err=>console.log(err));

        // Another way of creating user in mongodb.
        const note = new Notes({
            user: req.user.id,
            title,description,tag
        });
        const savedNote = await note.save();
        res.json(savedNote);
    }catch(error){
        console.error(error.message);
    }
}

const editNote = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const { title, description, tag } = req.body;
        const noteEditor = await Notes.findById(req.params.id);

        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};

        if(noteEditor.user.toString() !== req.user.id){
            res.status(401).send("Not Found");
        }
              
        const editedNote = await Notes.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
        res.json(editedNote);
    }catch(error){
        console.error(error.message);
    }
}

const deleteNote = async(req,res)=>{
    try{
        const delNote = await Notes.findById(req.params.id);
        console.log(delNote);
        // if(!delNote){
        //     res.status(401).send("Unauthorized Access");
        // }
        if(!delNote || delNote.user.toString() !== req.user.id){
            console.log(delNote);
            res.status(401).send("Unauthorized Access");
        }
              
        const deletedNote = await Notes.findByIdAndDelete(req.params.id);
        res.json({"message":"Successfully deleted your note",note:deletedNote});
    }catch(error){
        console.error(error.message);
    }
}




export {fetchAllNotes,fetchUserNote,addNote,editNote,deleteNote};