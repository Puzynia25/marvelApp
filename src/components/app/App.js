import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';

const App = () => {

    return(
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="marvelApp/" element={<MainPage/>} />
                        <Route path="marvelApp/comics" element={<ComicsPage/>} />
                        <Route path="marvelApp/comics/:comicId" element={<SingleComicPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;


