import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return <li className={styles.cityItem}>{city.cityName}</li>;
}

export default CityItem;
