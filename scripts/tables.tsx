import { type SQLiteDatabase } from 'expo-sqlite';

const initializeDb = async (db: SQLiteDatabase) => {
  try {
    // Create tables
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS races (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        stat_modifiers TEXT,
        traits TEXT
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        hit_die TEXT NOT NULL,
        stat_growth TEXT,
        traits TEXT
      );
    `);

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        race_id INTEGER,
        class_id INTEGER,
        level INTEGER DEFAULT 1,
        background TEXT,
        FOREIGN KEY (race_id) REFERENCES races (id),
        FOREIGN KEY (class_id) REFERENCES classes (id)
      );
    `);

    // Insert a race
    await db.execAsync(
      `INSERT INTO races (name, description, stat_modifiers, traits) 
       VALUES ('Elf', 'A graceful and mystical race with a connection to nature and magic.', '{"dexterity": 2, "intelligence": 1}', 
        'Darkvision, Keen Senses, Fey Ancestry');`
    );

    // Insert a class
    await db.execAsync(
      `INSERT INTO classes (name, description, hit_die, stat_growth, traits) 
       VALUES ('Wizard', 'A scholarly magic user who wields spells with great versatility.', '1d6', '{"intelligence": "high", "constitution": "medium"}', 
        'Spellcasting, Arcane Recovery');`
    );

    // Insert characters
    await db.execAsync(
      `INSERT INTO characters (name, race_id, class_id, level, background) 
       VALUES ('Arannis', 1, 1, 3, 'Acolyte');`
    );

    await db.execAsync(
      `INSERT INTO characters (name, race_id, class_id, level, background) 
       VALUES ('Thalion', 1, 1, 5, 'Hermit');`
    );

    console.log('Database initialized and seeded successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export { initializeDb };
