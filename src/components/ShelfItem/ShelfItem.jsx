
function ShelfItem(item){

    console.log('in shelf item', item.item)
    return (
    <li>
        <img src={item.item.image_url}/>
        <p>{item.item.description}</p>
        <button> X </button>
    </li>
    )
};

export default ShelfItem; 