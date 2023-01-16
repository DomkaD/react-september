import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {

  return (
      <div className="wrap">
        <SimpsonComponent
            itemName={'bart'}
            pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
        />

        <SimpsonComponent
            itemName={'homer'}
            pic={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
        />

        <SimpsonComponent
            itemName={'Marge'}
            pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />

        <SimpsonComponent
              itemName={'lisa'}
              pic={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
          />

          <SimpsonComponent
              itemName={'maggie'}
              pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
          />


      </div>

  );
}

export default App;
