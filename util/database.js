import * as SQLite from 'expo-sqlite';

import { Place } from '../models/place';
const db = SQLite.openDatabaseSync('places.db');
export async function init() {
  return await db.execAsync(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY NOT NULL, 
    title TEXT NOT NULL, 
    imageUri TEXT NOT NULL,
    address TEXT NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL
  );`);
}

export async function insertPlace(place) {
  const result = await db.runAsync(
    'INSERT INTO places (title, imageUri,address,lat,lng) VALUES (?, ?,?,?,?)',
    [
      place.titile,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
  console.log(result);
  return result;
}

export async function fetchPlaces() {
  const places = [];
  const allRows = await db.getAllAsync('SELECT * FROM places');
  for (const row of allRows) {
    places.push(
      new Place(
        row.title,
        row.imageUri,
        { lat: row.lat, lng: row.lng, address: row.address },
        row.id
      )
    );
  }
  return places;
}

export async function fetchPlaceById(id) {
  const firstRow = await db.getFirstAsync(
    'SELECT * FROM places where id = ?',
    id
  );
  const place = new Place(
    firstRow.title,
    firstRow.imageUri,
    { lat: firstRow.lat, lng: firstRow.lng, address: firstRow.address },
    firstRow.id
  );
  return place;
}
