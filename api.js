import './App.css';
import axios from 'axios';

let API_KEY= 'RDL7CTNA1DWL9G8I'
const api =axios.create({

    baseURL:'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}',
});

export default api;
