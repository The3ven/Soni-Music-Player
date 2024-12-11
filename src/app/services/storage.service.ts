import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/Storage';

@Injectable({
  providedIn: 'root',
})

export class StorageService {
  constructor() {}

  async setItem(key: string, value: any) {
    await Storage.set({
      key,
      value: JSON.stringify(value), // Store as string
    });
  }

  async getItem(key: string) {
    const { value } = await Storage.get({ key });
    if(value)
    {
      return JSON.parse(value); // Parse back to object
    }
    else
    {
      return ''
    }
  }

  async removeItem(key: string) {
    await Storage.remove({ key });
  }

  async clear() {
    await Storage.clear();
  }
}
