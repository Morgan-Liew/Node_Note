let str = 'BufferStudy'

let buf = Buffer.from(str);


// let buf2 = new Buffer(10);
console.log(buf.length);

// 创建一个10个字节的buffer
let buf2 = Buffer.alloc(10)

buf2[1] = 101;
console.log(buf2)

let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)
