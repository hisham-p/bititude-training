#!/bin/bash
#use of variables such as readonly,unset
echo "hai"
in="hello"
readonly out="good"
unset in
echo "$in $out"

