import * as SQLite from 'expo-sqlite';

export async function init() {
  const db = await SQLite.openDatabaseAsync('places.db');
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
