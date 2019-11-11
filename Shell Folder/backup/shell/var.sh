#!/bin/sh
echo ${avg:-"new value"}
echo -n "1 - value of avg --> ${avg} "

echo ${avg:="new value"}
echo -n "2 - value of avg --> ${avg}"

echo ${avg:+"new value"}
echo -n "3 - new value of avg --> $avg"

avg="demo"
echo ${avg:+"new value"}
echo -n "4 - new value after the prevalue --> $avg"

echo ${avg:?"substitution complete"}
echo -n "value of avg --> ${avg}"
