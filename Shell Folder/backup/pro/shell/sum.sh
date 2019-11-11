#/bin/sh
#Write a shell script sum.sh that takes an unspecified number of command line arguments (upto 9) of ints
#finds their sum. 
#Modify the code to add a number to the sum only if the number is greater than 10
arr=($@)
echo "entered numbers : ${arr[@]}"
sum=0
for i in ${arr[@]}
do
	sum=`expr $sum + $i`
done

echo "sum is $sum"
echo "enter 1 if you want to add more numbers"
read c
echo "enter the number greater than 10"
read n
if [ $c -eq 1 -a $n -ge 10 ]
then
	sum=`expr $sum + $n`
	echo "sum after adding number is $sum"
else
	echo "invalid"
fi


