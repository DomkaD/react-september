export function Launch({item}) {

    return (
        <div>
            <h2>{item.flight_number} - {item.rocket}</h2>
            <img src={item.links.patch.small}/>
        </div>
    );
}