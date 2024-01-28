import fs from 'fs';


const read = async () => {
  const filePath = 'src/fs/files/fileToRead.txt';
  
  fs.access(filePath, (err) => {
    if (err) {     // if file doesn't exists
      throw new Error('FS operation failed');
    } else {       // if file is exists
      fs.readFile(
        filePath,
        "utf-8",
        (err, data) => {
          if (err) throw err;
          process.stdout.write(`${data}\n`);
        },
      )
    }
  })
};

await read();