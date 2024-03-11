import cors from "cors";
import "dotenv/config";
import express from "express";

import { Payload } from "./types/Payload";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  return res.send(`Localhost Up And Running`);
});

app.get("/:formId/filteredResponses", async (req, res) => {
  try {
    const formId = req.params.formId    
    
    const payload = await fetch(
      'https://api.fillout.com/v1/api/forms/' + formId + '/submissions', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + process.env.BEARER
        },
      }
    )
    
    const apiResponseJson: Payload = await payload.json()
    
    res.send(apiResponseJson);

  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);