#!/bin/bash
echo "enter the option 1:add 2:sub 3: mul 4:div "
read opt
echo "enter the numbers"
read a
read b
case $opt in 
        1)echo Addition       : $(expr $a + $b);; 
        2)echo Suubtraction   : $(expr $a - $b);; 
        3)echo Multiplication : $(expr $a \* $b);; 
        4)echo Division       : $(expr $a / $b);; 
        5)echo Modules        : $(expr $a % $b);; 
        *)echo This is not a choice 
esac 




