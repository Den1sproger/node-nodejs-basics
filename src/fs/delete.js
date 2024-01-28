import fs from 'fs';


const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt';

  fs.access(filePath, (err) => {
    if (err) {   // if file doesn't exists
      throw new Error('FS operation failed');
    } else {     // if file is exists
      fs.rm(filePath, (err) => {
        if (err) throw err;
      })
    }
  });
};

await remove();