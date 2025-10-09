import sqlite3 from 'sqlite3';
sqlite3.verbose();

export const addStudentDb = async (data: any): Promise<number | null> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  const addedId = await new Promise<number | null>((resolve, reject) => {
    const sql = 'INSERT INTO student (first_name, middle_name, last_name) VALUES (?, ?, ?)';

    db.run(sql, [data.firstName, data.middleName, data.lastName], function (err) {
      if (err) {
        db.close();
        reject(err);
        return;
      }

      if (this.changes > 0) {
        resolve(1); 
      } else {
        resolve(null);
      }

      db.close();
    });
  });

  return 1;
};
