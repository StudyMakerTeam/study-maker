#!/bin.bash
cd /home/ubuntu/build

curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install nodejs npm -y
