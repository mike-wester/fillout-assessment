import cors from "cors";
import "dotenv/config";
import express from "express";

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
    
    const apiResponse = await fetch(
      'https://api.fillout.com/v1/api/forms/' + formId + '/submissions', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + process.env.BEARER
        },
      }
    )
    const apiResponseJson = await apiResponse.json()

    console.log(apiResponseJson)
    res.send('Done – check console log')
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);