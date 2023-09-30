const fs = require('fs');

const sourcePath = 'packages/core/src/style/date-picker.css'; // 원본 CSS 파일 경로
const destinationPath = 'packages/core/dist/date-picker.min.css'; // 목적지 CSS 파일 경로

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

const packageJsonPath = 'packages/core/package.json'; // package.json 파일 경로

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Can't read file: ${packageJsonPath}`);
    return;
  }

  const packageJson = JSON.parse(data);

  // exports 필드를 업데이트
  packageJson.exports = {
    '.': {
      'module': './dist/tui-inch-core.esm.js',
      'import': './dist/tui-inch-core.cjs.mjs',
      'default': './dist/tui-inch-core.cjs.js',
    },
    './package.json': './package.json',
    './dist/date-picker.min.css': './dist/date-picker.min.css',
  };

  // 업데이트된 package.json을 다시 문자열로 변환
  const updatedPackageJson = JSON.stringify(packageJson, null, 2);

  // package.json 파일 업데이트
  fs.writeFile(packageJsonPath, updatedPackageJson, (_err) => {
    if (_err) {
      console.error(`Can't save the file: ${packageJsonPath}`);
      return;
    }

    console.log('🚥 package.json file updated');
  });
});