import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404')); //динамический импорт, компонент Page404 будет подгружаться только тогда, когда он нужен 
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleCharLayout = lazy(() => import('../pages/SingleCharLayout'));

const App = () => {

    return(
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/marvelApp" element={<MainPage/>} />
                            <Route path="/marvelApp/comics" element={<ComicsPage/>} />
                            <Route path="/marvelApp/comics/:comicId" element={<SingleComicPage/>} />
                            <Route path="/marvelApp/characters/:charId" element={<SingleCharLayout/>} />
                            <Route path="*" element={<Page404/>} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}

export default App;


