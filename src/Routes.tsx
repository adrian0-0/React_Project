import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Cart } from './pages/cart';
import { Catalog } from './pages/catalog';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/cart' element={<Cart></Cart>}></Route>
                <Route path='/catalog' element={<Catalog></Catalog>}></Route>
            </Routes>
        </Router>
    )

}