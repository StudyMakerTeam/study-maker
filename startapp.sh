# copy

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd $PROJECT_ROOT

# 원래 node 프로세스 종료
sudo kill -9 `ps -ef | grep 'node ./bin/www' | awk '{print $2}'`
sudo yarn
sudo start &
disown



# cd /home/ubuntu/build
# sudo yarn
# sudo yarn init -y

# cd /home/ubuntu/build/src
# sudo yarn build
# sudo yarn start

