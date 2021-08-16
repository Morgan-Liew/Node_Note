/* 
    文件系统 (File System)
        - 文件系统简单说就是通过Node来操作系统中的文件
        
*/
let fs = require('fs')

let fw = fs.openSync('testfs.txt','w');
console.log(fw);

fs.writeSync(fw,'test the fs')

fs.closeSync(fw)