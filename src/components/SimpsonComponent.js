import './SimpsonComponent.css'
function SimpsonComponent({itemName, pic}) {

    let classNameItem = 'card';

    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
        </div>
    );
}

export default SimpsonComponent;