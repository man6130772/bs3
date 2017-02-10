rem  set TARGET=compress
set TARGET=build
cd build && webpack --config webpack.config.js && cd ../ && pause && call build.bat