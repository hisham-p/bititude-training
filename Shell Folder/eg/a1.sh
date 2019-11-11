#/bin/sh
arr=($@)
echo "entered numbers : ${arr[@]}"
sum=0
for i in ${arr[@]}
do
	sum=`expr $sum + $i`
done

echo "sum is $sum"
