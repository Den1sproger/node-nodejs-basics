const parseArgs = () => {
  let text = '';
  let args = process.argv.slice(2);

  args.forEach(element => {
    if (element.startsWith('--')) {
      text += `, ${element} is `
    } else {
      text += `${element}`
    }
  })
  
  process.stdout.write(`${text.slice(2)}\n`);
};

parseArgs();