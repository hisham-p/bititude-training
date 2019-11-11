#!/bin/sh
echo "enter the path"
read path
echo "no of directories :" 
ls -lR "$path" | wc -l

