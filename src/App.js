import React from 'react';
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './api'
import imageDisplay from './img/image.png'


import styles from './App.module.css';


class App extends React.Component  {
  state={
    data:{},
    country:''
  }
  
  async componentDidMount(){
    const recievedData= await fetchData();
    this.setState({data: recievedData})
  }

  handelCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }
  render(){
    const { data, country } =this.state;
    return (
      <div className={styles.container}>
        <img src={imageDisplay} className={styles.image} alt="COVID-19 Dashboard"  />
        <Cards data={data} />
        <CountryPicker handelCountryChange={this.handelCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
  
}

export default App;
