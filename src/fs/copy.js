import fs from 'fs';
import path from 'path';


const copy = async () => {
  const source = 'src/fs/files';
  const dest = 'src/fs/copy-files';

  const isSourceExists = fs.existsSync(source);
  const isDestExists = fs.existsSync(dest);

  if (isSourceExists && !isDestExists) {
    fs.mkdirSync(dest);

    fs.readdir(source, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {    // copy each file to copy directory
        const sourceFile = path.join(source, file);
        const destFile = path.join(dest, file);

        fs.copyFileSync(sourceFile, destFile);
      })
    })
  } else {
    throw new Error('FS operation failed');
  }
}

await copy();
