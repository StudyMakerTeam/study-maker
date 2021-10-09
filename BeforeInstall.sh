#!/bin.bash
cd /home/build

sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g yarn
