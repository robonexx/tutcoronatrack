import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountyPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import{ fetchData } from './api';


class App extends React.Component {

  state = {
    data: {},
    country: '',
    }

 async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    /* fetch date and set state */
    const fetchedData = await fetchData(country);

    /* set the state */
    this.setState({ data: fetchedData, country: country });

    console.log(fetchedData)

  }
  
  render() {
    const { data, country } = this.state;
  return (
    <div className={styles.container}>
      <h1>Covid-19 tracker</h1>
      <Cards data={data} />
      <CountyPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country}/>
      
    </div>
  );
}
}

export default App;
