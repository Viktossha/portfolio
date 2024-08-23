import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Works/>
        </div>
    );
}

export default App;