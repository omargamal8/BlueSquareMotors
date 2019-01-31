sudo docker run -it --name BlueSqMs --rm -v $PWD:/blue_square_motors node
sudo docker build -t node -f Dockerfile .
