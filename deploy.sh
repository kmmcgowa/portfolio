#!/bin/bash

echo -e "\033[0;32mDeploying update to Github...\033[0m"

hugo

cd public

git add .

msg="rebuilding and publishing updates"
if [ $# -eq 1 ]
	then msg="$1"
fi

git commit -m "$msg"

echo $( git status )

git push origin master

cd ..