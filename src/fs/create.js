import fs from 'fs';


const create = async () => {
  const filepath = "src/fs/files/fresh.txt";

  fs.access(filepath, fs.constants.F_OK, (error) => {
    if (error) {   // if file doesn't exists
      fs.writeFile(
        filepath,
        "I am fresh and young",
        (err) => {
          if (err) throw err;
        },
      )
    } else {   // if file is already exists
      throw new Error('FS operation failed');
    }
  })
}

await create();