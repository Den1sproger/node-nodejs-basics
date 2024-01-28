import fs from 'fs';
import path from 'path';


const rename = async () => {
  const wrongFile = 'src/fs/files/wrongFilename.txt';
  const properFile = 'src/fs/files/properFilename.md';
  const isExistsWrongFile = fs.existsSync(wrongFile);
  const isExistsProperFile = fs.existsSync(properFile);

  if (isExistsWrongFile && !isExistsProperFile) {
    fs.rename(wrongFile, properFile, (err) => {
      if (err) throw err;
    })
  } else {
    throw new Error('FS operation failed');

  }
}

await rename();