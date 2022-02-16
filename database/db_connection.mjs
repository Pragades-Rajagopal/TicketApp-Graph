import Database from 'better-sqlite3';
import path from 'path';

const __dirname = (() => {
    let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); 
    return path.resolve( (process.platform == "win32") ? x.substr(1) : x ); 
})();

const dbPath = path.resolve(__dirname, "../../", "TicketApp", "database", "data.sqlite3");

const db = new Database(dbPath, {fileMustExist: true});

const data = () => {
    const sql = "SELECT * FROM TICKETS_V";

    return db.prepare(sql).all();
};

const dataByMonth = (month) => {
    const sql = "SELECT * FROM TICKETS_V WHERE MONTH = ?";

    return db.prepare(sql).all(month);

};

const month = () => {
    const sql = "SELECT DISTINCT MONTH FROM TICKETS_V";

    return db.prepare(sql).all();
}

export default { 
    data,
    dataByMonth,
    month
 };

