import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Works} from "./layout/sections/works/Works";
import {Achievements} from "./layout/sections/achievements/Achievements";
import {Blogs} from "./layout/sections/blogs/Blogs";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Quote} from "./layout/sections/quote/Quote";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Works/>
            <Quote/>
            <Achievements/>
            <Blogs/>
            <Testimonials/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;