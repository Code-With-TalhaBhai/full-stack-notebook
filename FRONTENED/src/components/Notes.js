import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {
    const {title,description} = props;
    return (
        // <div>
            <div className="card mx-3 mt-5 border border-primary" style={{"width":"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="icon my-2" style={{cursor:'pointer'}}>
                    <EditIcon color="primary"/>
                    <DeleteIcon color="warning"/>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
                </div>
        // </div>
    )
}

export default Notes
