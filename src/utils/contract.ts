import Web3 from 'web3';
import citizen from '../abis/citizen';

const Infura_API_Key: string | undefined = (process.env.REACT_APP_INFURA_KEY as string);

let web3 = new Web3(Web3.givenProvider || `https://goerli.infura.io/v3/${Infura_API_Key}`);
const address = '0x76c927389DbAc06d4657F08d8D93Bb641f25a826';
const contract = new web3.eth.Contract(citizen, address);

export default contract;