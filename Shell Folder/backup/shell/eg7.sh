#!/bin/sh
#echo "elements for array are : "
arr=(hai hello how are)
echo ${arr[@]/*[a]*/}
