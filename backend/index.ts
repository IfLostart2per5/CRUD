const express: any = require("express");
const bodyP: any = require("body-parser");
const app: any = express();


app.use((req: any, res: any, next: () => void) => {
  console.log("Running at " + Date.now() + " [hour]");
  next();
});
app.use(bodyP.json());
app.get('/:nome', (req: any, res: any) => {
  res.send(`Welcome ${req.params.nome}`);
});


app.get("/data/teste", (req: any, res: any) => {
    res.send("Hello world!");
});

app.listen(17192, () => {
  console.log("running on port 17192");
})

