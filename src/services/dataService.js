export default class DataService {
  _url = 'https://data-meters.firebaseio.com/data.json';

  getMetersData = async (url = this._url) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Не удается найти адрес ${url}`);
    }

    return await result.json();
  }
}
