#!/bin/sh
rm -r $1
mkdir /home/bt022/Desktop/sh/$1 
touch f.txt 
mv /home/bt022/Desktop/sh/f.txt /home/bt022/Desktop/sh/$1 
find -depth -type d -empty > /home/bt022/Desktop/sh/$1/f.txt
#ls -ls -d | find -type d -size 0 >f.txt 
#ls -l -d | size 0 > f.txt
echo "if you wanted to see the contents , press 1"
read n
if [ $n -eq 1 ]
then
	cat $1/f.txt
else
	echo "invalid choice"
fi
 
