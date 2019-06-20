// I did a copy of 'ra-data-json-server' -> './customJsonServer' and modified the trades/associate part
import jsonServerProvider from './customJsonServer';
export default jsonServerProvider('http://127.0.0.1:5000/api');
