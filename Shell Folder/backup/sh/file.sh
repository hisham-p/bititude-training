#!/bin/sh
echo "enter name of text file to be created (after entering name , type the content and cntrl+d)  : "
read name
cat > $name
echo "if you dont want to replace the contents press 1"
read n
if [ $n -eq 1 ]
then
	echo "enter the new file name(contents to move)"
	read name2
	sort $name | uniq -u >  $name2
	echo "contents after removing repeated lines --> "
	cat $name2

else
	echo "contents after removing repeated lines --> "
	sort $name | uniq -u > $name
fi

 
