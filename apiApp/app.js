import express from 'express';
import bodyParser from 'body-parser';
// import helmet from 'helmet';
import DB from "../database/db_connection.mjs";
import cors from 'cors';

const port = 9192;
var app = express();

// app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.send("<h1>Check</h1>");
});

app.get("/ticketapi", async (req, res) => {
    
    const data = await DB.data();
    // console.log(data);
    if (!data) {
        res.status(400).json({"error": "Issue at database or application"});
        return;
    }

    res.status(200).json(data);
});

app.get("/ticketapi/:month", async(req, res) => {

    const month = req.params.month;

    if (month === 'MONTHS') {
        const val = await DB.month();

        res.status(200).json(val);
        return;
    }

    const data = await DB.dataByMonth(month);

    if (data.length === 0) {
        res.status(400).json({"error": "Specified Month is not available"});
        return;
    }

    res.status(200).json(data);
});

app.listen(port, () => {console.log(`Server is running in ${port}`)});

