# if [ -d "/home/ubuntu/build" ]; then rm -Rf "/home/ubuntu/build"; fi

cd /home/build

sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g yarn

cd /home/build

sudo yarn init -y
# study-maker
# 1.0.0
# description
# /study-maker
# anytime
# MIT
# true

