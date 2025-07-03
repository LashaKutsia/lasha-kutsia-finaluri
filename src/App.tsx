import AppRoutes from "./routes/AppRoutes.tsx";

import { Navbar } from "./components/layout";

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <AppRoutes />
        </div>
    );
};

export default App;
