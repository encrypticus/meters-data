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

      data[key].map((elt, index) => {
        elt.id = `${key}/${index}`;
        transformedData.push(elt);
      });

    }

    return transformedData;
  };

  getMetersData = async () => {
    const data = await this.getResource();
    return this._transformData(data);
  };

  deleteRow = async (id) => {
    const result = await fetch(`https://data-meters.firebaseio.com/data/${id}.json`, {
      method: 'DELETE'
    });

    if (!result.ok) {
      throw new Error('Не удалось удалить запись');
    }

    return await result.json();
  };

  changeValue = async (id, value) => {
    const result = await fetch(`https://data-meters.firebaseio.com/data/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ value })
    });

    if (!result.ok) {
      throw new Error('Не удалось перезаписать значение');
    }

    return result.json();
  }

  addStation = async (request, url = this._url) => {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(request)
    });

    if (!result.ok) {
      throw new Error(`Не удается найти адрес ${url}`);
    }

    return await result.json();
  }
}
