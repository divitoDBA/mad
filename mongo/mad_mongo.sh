
export MONGO_HOME=/home/mongodb/distro/latest
export PATH=$MONGO_HOME/bin:$PATH

mongo --host $1 cuento-recs.js

