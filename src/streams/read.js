import fs from 'fs';


const read = async () => {
  const filePath = 'src/streams/files/fileToRead.txt';
  const stream = fs.createReadStream(filePath, 'utf-8');
  
  stream.on("data", (chunk) => {
    process.stdout.write(chunk + '\n');
  })
}

await read();