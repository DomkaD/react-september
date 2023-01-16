import CharacterStyle from "./CharacterStyle.css";
function Character({character}) {

    return (
        <div className={'about'}>
            <h2>{character.id}.{character.name}</h2>
            <p>{character.status}--{character.species}--{character.gender}</p>
            <img src={character.image} alt=""/>
        </div>
    );
}
export default Character