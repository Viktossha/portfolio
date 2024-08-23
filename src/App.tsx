import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Works} from "./layout/sections/works/Works";
import {Achievements} from "./layout/sections/achievements/Achievements";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Works/>
            <Achievements/>
        </div>
    );
}

export default App;