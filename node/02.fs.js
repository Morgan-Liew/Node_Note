/* 
    文件系统 (File System)
        - 文件系统简单说就是通过Node来操作系统中的文件

    异步文件写入
    fs.open(path,flags[,mode],callback)
    fs.write
    fs.close

    简单文件写入
    fs.writeFile(file,data[,options],callback)
    fs.writeFileSync(file,data[,options])

    流式文件写入
    同步、异步、简单文件写入都不适合大文件写入，性能较差，容易导致内存溢出

    创建一个可写流
        fs.createWriteStream(path[,options])
    输入内容
        write
    可通过监听流open和close事件来监听打开和关闭

    简单文件读取
    fs.readFile

    流式文件读取
    fs.createReadStream
*/
let fs = require('fs')

let fw = fs.openSync('testfs.txt', 'w');
console.log(fw);

fs.writeSync(fw, 'test the fs')

fs.closeSync(fw)

let fw2 = fs.open('fsSync.txt', 'w', (err, fw2) => {
    if (!err) {
        fs.write(fw2, '异步写入内容', (err) => {
            console.log('写入成功');
        })

        fs.close(fw2, (err) => {
            if (!err) {
                console.log('文件关闭')
            }
        });
    }

})