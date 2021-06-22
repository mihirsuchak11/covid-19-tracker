import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

import coronaImage from "./images/covid-19.png";

interface Props {}

const App: React.FC = (props: Props) => {
  const [data, setData] = useState([] as any);
  const [country, setCountry] = useState("" as string);

  // // API call to fetch data
  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData(country));
    };

    fetchAPI();
  }, [country]);

  const handleCountryChange = async (country: any) => {
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <h1>Staging Environment</h1>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
