#!/bin/sh
#use of command line arguments and parameters
echo "file name : $0"
echo "first argument : $1"
echo "2nd argument : $2"
echo "quoted values : $@"
echo "quoted values : $*"
#echo "total number of arguments/parameters : $#"
echo "exit status of last command used : $?"
echo "process number of last bg command : $!"

