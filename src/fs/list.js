import fs from 'fs';


const list = async () => {
  const dirPath = 'src/fs/files';

  fs.access(dirPath, (err) => {
    if (err) {     // if folder doesn't exists
      throw new Error('FS operation failed');
    } else {       // if folder is exists
      fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        console.log(files);
      })
    }
  })
}

await list();