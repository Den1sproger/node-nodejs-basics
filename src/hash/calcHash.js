import crypto from 'crypto';
import fs from 'fs';


const calculateHash = async () => {
  const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
  const stream = fs.createReadStream(filePath, 'utf-8');
  
  stream.on("data", (chunk) => {
    const hash = crypto.createHash('sha256').update(chunk).digest('hex');
    console.log(hash);
  });
}

await calculateHash();