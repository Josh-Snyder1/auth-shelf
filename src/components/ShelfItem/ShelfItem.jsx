import { useSelector, useDispatch } from 'react-redux'; 

function ShelfItem(item){

    const dispatch = useDispatch(); 
    const user = useSelector(store=> store.user);

    // console.log('in shelf item', item.item)
    console.log('in user', user.id)
    
    const deleteItem = () => {
        dispatch({
            type:'DELETE_ITEM',
            // this payload has a user id already attached to it
            payload: {
                item: item.item,
                // user: user.id
        }
    })}
    return (
    <li>
        <img src={item.item.image_url}/>
        <p>{item.item.description}</p>
        <button onClick={deleteItem}> X </button>
    </li>
    )
};

export default ShelfItem; 