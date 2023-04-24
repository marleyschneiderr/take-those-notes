const fs = require("fs");
// reads JSON file, reads content, returns a buffer
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(data);
  });

  app.get("/api/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
  });

  app.post("/api/notes", (req, res) => {
    const addNote = req.body;
    const differentId = data.length.toString();
    console.log(differentId);
    addNote.id = differentId;
    data.push(addNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), (err) => {
      if (err) throw err;
    });

    res.json(data);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const entryId = req.params.id;
    let addId = 0;
    console.log(`Deleting note with id ${entryId}`);
    data = data.filter((nowNote) => {
      return nowNote.id != entryId;
    });

    for (const nowNote of data) {
      nowNote.id = addId.toString();
      addId++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  });
};