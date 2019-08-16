echo "starting backend"
start cmd /k "cd myplan_backend & node server.js"
echo "starting mongo"
#edit the path to mongo
start cmd /c ""C:\Program Files\MongoDB/Server\4.0\bin\mongo.exe""
echo "starting frontend"
cd myplan & npm run serve
