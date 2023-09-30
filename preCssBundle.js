const fs = require('fs');

const packageJsonPath = 'packages/core/package.json';

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
    './package.json': './package.json'
  };

  // 업데이트된 package.json을 다시 문자열로 변환
  const updatedPackageJson = JSON.stringify(packageJson, null, 2);

  // package.json 파일 업데이트
  fs.writeFile(packageJsonPath, updatedPackageJson, (_err) => {
    if (_err) {
      console.error(`Can't save the file: ${packageJsonPath}`);
      return;
    }

    console.log('STEP) pre bundling: 🚥 package.json file updated');
  });
});