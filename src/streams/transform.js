import {Transform, Writable} from 'stream';
import {stdin, stdout} from 'process';


const transform = async () => {
  class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
      const resultString = chunk.toString('utf8').split('').reverse().join('');
      this.push(resultString);
      callback();
    }
  }

  class Out extends Writable {
    _write(chunk, encoding, callback) {
      console.log(chunk.toString() + '\n');
      callback();
    }
  }

  const reverse = new ReverseTransform();
  const out = new Out();
  stdin.pipe(reverse).pipe(out);
}

await transform();