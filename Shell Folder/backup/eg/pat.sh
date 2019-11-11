#!/bin/sh
#echo "enter the path"
#read pat
read  x -p "enter a directory: " -i "$HOME/$x/" -e path
echo "no of directories :" 
ls -lR "$HOME/$x" | wc -l

