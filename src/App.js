import './App.css';
import {useRef} from "react";

import {actions, Reducer} from "./components";


function App() {

    const catRef = useRef()
    const dogRef = useRef()

    const [catState, catDispatch] = Reducer()
    const [dogState, dogDispatch] = Reducer()

    const addCat = () => {
        catDispatch({type: actions.ADD, payload: {name: catRef.current.value}})
        catRef.current.value = ''
    }

    const addDog = () => {
        dogDispatch({type: actions.ADD, payload: {name: dogRef.current.value}})
        dogRef.current.value = ''
    }

    const deleteCat = (id) => {
        catDispatch({type: actions.DELETE, payload: {id}})
    }

    const deleteDog = (id) => {
        dogDispatch({type: actions.DELETE, payload: {id}})
    }


    return (
        <div className="App">
            <div>

                <label>
                    Add Cat: <input type="text" ref={catRef}/>
                    <button onClick={addCat}>Push</button>
                </label>

                <label>
                    Add Dog: <input type="text" ref={dogRef}/>
                    <button onClick={addDog}>Push</button>
                </label>

            </div>
            <div>
                <div>
                    {catState.map(cat => <div key={cat.id}>
                        {cat.name}
                        <button onClick={() => deleteCat(cat.id)}>delete cat</button>
                    </div>)}
                </div>

                <div>
                    {dogState.map(dog => <div key={dog.id}>
                        {dog.name}
                        <button onClick={() => deleteDog(dog.id)}>delete dog</button>
                    </div>)}
                </div>

            </div>


        </div>
    );
}

export default App;
