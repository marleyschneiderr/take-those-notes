const fs = require("fs");
// reads JSON file, reads content, returns a buffer
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

  app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });

  app.post("/api/notes", function (req, res) {
    let addNote = req.body;
    let differentId = data.length.toString();
    console.log(differentId);
    addNote.id = differentId;
    data.push(addNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
      if (err) throw err;
    });

    res.json(data);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let entryId = req.params.id;
    let addId = 0;
    console.log(`Deleting note with id ${entryId}`);
    data = data.filter((nowNote) => {
      return nowNote.id != entryId;
    });

    for (nowNote of data) {
      nowNote.id = addId.toString();
      addId++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  });
};
