const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, "../../", "TicketApp", "database", "data.sqlite3");

const db = new Database(dbPath, {fileMustExist: true});

const data = () => {
    const sql = "SELECT * FROM TICKETS_V";

    return db.prepare(sql).all();
};

module.exports = { data };


