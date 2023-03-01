// const fs=require('fs')
// // read file
// fs.readFile('./docs/text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     }
// );
// // write file
// fs.writeFile('./docs/text.txt', 'Hello World', () => {
//     console.log('File written');
// }
// );
// //make directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) throw err;
//         console.log('Folder created');
//     });
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if (err) throw err;
//         console.log('Folder deleted');
//     });
// }
// // delete file
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) throw err;
//         console.log('File deleted');
//     });
// }
const fs=require('fs')
const readStream =fs.ReadStream('./docs/text.txt',{encoding: 'utf8'});
const writeStream =fs.WriteStream('./docs/text2.txt');
// readStream.on(
//     'data', (chunk) => {
//         console.log('-----NEW CHUNK-----');
//         console.log(chunk);   
//         writeStream.write('\nNEW CHUNK\n');
//         writeStream.write(chunk);
//     }
// )
// piping
readStream.pipe(writeStream);