#string operators tutorial
a='abc'
b='efg'
echo "strings are >$a  >$b"
if [ $a = $b ]
then
	echo "$a and $b are equal"
else
	echo "$a and $b are not equal"
fi

if [ $a != $b ]
then
	echo "strings not equal"
else
	echo "strings equal"
fi

if [ -z $a ] 
then
	echo "string length is zero"
else
	echo "string length not zero"
fi

if [ -n $a ]
then
	echo "string length is non zero"
else
	echo "string length zero"
fi

if [ $a ]
then 
	echo "string not empty"
else
	echo "string empty"
fi

