#sudo docker stop $(sudo docker ps -a -q)
sudo docker build -t node -f Dockerfile .
sudo docker run -it --net=host --name BlueSqMs --rm -v $PWD:/blue_square_motors node
