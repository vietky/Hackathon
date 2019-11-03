import config from '../config.js';
import fetch from 'node-fetch';

class SugarService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  submit(obj) {
    const url = `${this.baseUrl}/api/ads`;
    // console.log('url', url, obj);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(async (resp) => {
      const result = await resp.json()
      console.log(`url: ${url}`, result);
      return Promise.resolve(result);
    });
  }
  upload(type, file) {
    const url = `${this.baseUrl}/api/assets`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    return fetch(url, {
      method: 'POST',
      body: formData,
      // headers: { 'Content-Type': 'application/json' }
    }).then(async (resp) => {
      const result = await resp.json()
      console.log(`url: ${url}`, result);
      return Promise.resolve(result);
    });
  }
}

export default new SugarService(config.backend_base_url);