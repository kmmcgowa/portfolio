#!/bin/bash

echo -e "\033[0;32mDeploying update to Github...\033[0m"

git add .

msg="rebuilding and publishing updates - $(date '+%Y-%m-%d %H:%M:%S')"
if [ $# -eq 1 ]
	then msg="$1"
fi

git commit -m "$msg"

echo $( git status )

git push
