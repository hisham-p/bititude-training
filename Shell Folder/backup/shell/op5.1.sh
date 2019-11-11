#!/bin/bash
echo "enter the option 1:add 2:sub 3: mul 4:div "
read OPT
echo "enter the numbers"
read n
read m
case ${OPT} in
	1) add= `expr $m + $n`
	       echo "sum is $add"
       		;;
	2) sub= `expr $m - $n`
		echo "sub is $sub"
		;;
	3) mul= `expr $m \* $n`
		echo "mul is $mul"
		;;
	4) div= `expr $m / $n`
		echo "div is $div"
		;;
	*) echo "invalid choice"
esac



