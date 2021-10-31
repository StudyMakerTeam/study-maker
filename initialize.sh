# if [ -d "/home/ubuntu/build" ]; then rm -Rf "/home/ubuntu/build"; fi

cd /home/ubuntu/build

sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g yarn
# sudo npm i react-scripts
# cd /home/ubuntu/build

# sudo yarn init -y
sudo yarn
sudo yarn start

# study-maker
# 1.0.0
# description
# /study-maker
# anytime
# MIT
# true

