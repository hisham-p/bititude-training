echo "relational operators"
a=20
b=10
if [ $a -eq $b ]
then
	echo " $a -eq $b : numbers equal "
else 
	echo " $a -eq $b : numbers not equal"
fi
if [ $a -ne $b ]
then
	echo " $a -ne $b : numbers not equal "
else 
	echo " $a -ne $b : numbers equal"
fi
if [ $a -gt $b ]
then
	echo " $a -gt $b : $a is greater than $b "
else 
	echo " $a -gt $b : $a is not greater than $b"
fi
if [ $a -lt $b ]
then
	echo " $a -lt $b : $a is less than $b "
else 
	echo " $a -lt $b : $a is not less than $b"
fi
if [ $a -ge $b ]
then
	echo " $a -ge $b : $a is greater than or equal to $b"
else 
	echo " $a -ge $b : $a is not greater than or equal to $b"
fi
if [ $a -le $b ]
then
	echo " $a -eq $b : $a is less than or equal to $b "
else 
	echo " $a -eq $b : $a is not less than or equal to $b"
fi
