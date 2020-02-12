export default class DataService {
  _url = 'https://data-meters.firebaseio.com/data.json';

  getResource = async (url = this._url) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Не удается найти адрес ${url}`);
    }

    return await result.json();
  };

  _transformData = (data) => {
    const transformedData = [];

    for (const key in data) {
      data[key].id = key;
      transformedData.push(data[key]);
    }

    return transformedData;
  };

  getMetersData = async () => {
    const data = await this.getResource();
    return this._transformData(data);
  };
}
