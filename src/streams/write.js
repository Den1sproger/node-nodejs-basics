import fs from 'fs';


const write = async () => {
  const filePath = 'src/streams/files/fileToWrite.txt';
  const stream = fs.createWriteStream(filePath);
  
  process.stdin.on("data", (data) => stream.write(data));
};

await write();