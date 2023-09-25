const fs = require('fs');

const sourcePath = 'packages/core/src/style/date-picker.css'; // 원본 CSS 파일 경로
const destinationPath = 'packages/core/dist/date-picker.css'; // 목적지 CSS 파일 경로

fs.readFile(sourcePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Can't read file: ${sourcePath}`);
    return;
  }

  const minifiedCss = data.replace(/[\r\n]+/g, '').replace(/\s{2,}/g, ' ');

  fs.writeFile(destinationPath, minifiedCss, (_err) => {
    if (_err) {
      console.error(`Can't save the file: ${destinationPath}`);
      return;
    }

    console.log('🚥 CSS file bundling done');
  });
});