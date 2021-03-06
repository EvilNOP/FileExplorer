const fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
  console.log('');
  
  if (!files.length) {
    return console.log('    \033[31m No files to show!\033[39m\n');
  }
  
  console.log('   Select which file or directory you want to see\n');
  
  function file(i) {
    const filename = files[i];
    
    fs.stat(__dirname + '/' + filename, (err, stat) => {
      
      if (stat.isDirectory()) {
        // console.log('     '+i+'   \033[36m' + filename + '/\033[39m');
        console.log('   ' + i + '   ' + filename + '/');
      } else {
        // console.log('     '+i+'   \033[90m' + filename + '\033[39m');
        console.log('   ' + i + '   ' + filename);
      }
      
      i++;
      
      if (i == files.length) {
        console.log('');
        
        process.stdout.write('     \033[33mEnter your choice: \033[39m');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
      } else {
        file(i);
      }
    });
  }
  
  file(0);
});
