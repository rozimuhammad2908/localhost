const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/ishlash") {
    res.write("dastur boshlangich server ta`limi asosida tayyorlangan  ");
    res.end();
  } else if (req.url === "/papka-yaratish") {
    res.write(`<button onclick=${created()}>${"Papka-yaratish"}</button>`);
    res.end();
  } else if (req.url === "/txt-yaratish") {
    res.write(`<button onclick=${createdFile()}>${"txt-yaratish"}</button>`);
    res.end();
  } else if (req.url === "/txtni-ozgartirish") {
    res.write(`<button onclick=${write()}>${"txt-ozgartirish"}</button>`);
    res.end();
  } else if (req.url === "/txtni-o'qish") {
    res.write(`<button onclick=${read()}>${"txtni-o'qish"}</button>`);
    res.end();
  } else if (req.url === "/txtni-o'chirish") {
    res.write(`<button onclick=${deleted()}>${"txtni-o'chirish"}</button>`);
    res.end();
  } else if (req.url === "/papkani-o'chirish") {
    res.write(`<button onclick=${deleted2()}>${"Papkani-o'chirish"}</button>`);
    res.end();
  } else if (req.url === "/shunchaki") {
    res.write("cdwc");
    res.end();
  } else {
    res.write("404 not found");
    res.end();
  }
});
const created = () => {
  fs.mkdir(path.join("practise"), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Amalyot bajarildi");
  });
};
const createdFile = () => {
  setTimeout(() => {
    fs.writeFile(path.join("practise", "text.txt"), '"boldi"', (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }, 4000);
};
const write = () => {
  setTimeout(() => {
    fs.rename(
      path.join("practise", "text.txt"),
      path.join("practise", "index.txt"),
      (err) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("rename boldi");
        }
      }
    );
  }, 5000);
};
const read = () => {
  setTimeout(() => {
    fs.readFile(path.join("practise", "index.txt"), "utf-8", (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("fail raeding");
        console.log(data);
      }
    });
  }, 6000);
};
const deleted = () => {
  setTimeout(() => {
    fs.rm(path.join("practise", "index.txt"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("fayl delted boldi");
      }
    });
  }, 7000);
};
const deleted2 = () => {
  setTimeout(() => {
    fs.rmdir(path.join("practise"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Papka delted boldi");
      }
    });
  }, 8000);
};
server.listen(3000, () => {
  console.log("server eshitadi: ", 3000);
});
