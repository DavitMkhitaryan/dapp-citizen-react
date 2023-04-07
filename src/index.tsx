import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
import { ConnectorProvider } from './context/connector';
import { store } from './store';
import { Provider } from 'react-redux';

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ConnectorProvider>
        <App />
      </ConnectorProvider>
    </Web3ReactProvider>
  </Provider>
);
