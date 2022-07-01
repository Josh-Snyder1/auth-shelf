import { useSelector, useDispatch } from 'react-redux'; 

function ShelfItem(item){

    const dispatch = useDispatch(); 
    const user = useSelector(store=> store.user);

    console.log('in shelf item', item.item)

    const deleteItem = () => {
        dispatch({
            type:'DELETE_ITEM',
            // this payload has a user id already attached to it
            payload: {
                item,
                user
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