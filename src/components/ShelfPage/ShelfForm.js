import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 


function ShelfFrom(){

    let [ discription, setDiscription] = useState('');
    let [ imgUrl, setimgUrl] = useState('');
    const user = useSelector(store=> store.user);
    const dispatch = useDispatch(); 

const addToShelf = (event) => {
    event.preventDefault()
    dispatch({
        type:'ADD_ITEM',
        payload:{
            discription,
            imgUrl,
            user
        }
    })
}
    
    return(
        <>  
        <h1> This is the form</h1>
        <form onSubmit={addToShelf}>
            <input 
            onChange={(event) => { setDiscription(event.target.value)}}
            placeholder="Discription"
            /> 
            <input 
            onChange={(event) => { setimgUrl(event.target.value)}}
            placeholder="Url"
            /> 
            <input type="submit"/>
        </form>
        </>
    )
}

export default ShelfFrom;