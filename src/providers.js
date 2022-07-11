import { ResetCSS } from './global/resetCSS'
import App from './App'
import YugiohProvider from './providers/yugioh-provider'

const Providers = () => {
    return (
        <main>
            <YugiohProvider> 
                <ResetCSS />
                <App />            
            </YugiohProvider>
        </main>
    );
};

export default Providers;