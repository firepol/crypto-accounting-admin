// in src/Stats.js
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, fetchUtils } from 'react-admin';

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  return fetchUtils.fetchJson(url, options);
}

let baseUrl = 'http://127.0.0.1:5000/api';

const Stats = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchJson(baseUrl + '/trades/stats')
      .then(response => {
        return response.json;
      })
      .then((data) => {
        setData(data);
      })
  }, []);

  return (
    <Card>
      <Title title={data.title} />
      <CardContent>
        <div>{data.teaser}</div>
      </CardContent>
    </Card>)
};

export default Stats;
