rem  set TARGET=compress
set TARGET=build
cd build && node-debug webpack && cd ../ && pause && call debug.bat