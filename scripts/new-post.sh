#!/usr/bin/env bash

read -p "Enter post id    : " POST_ID
read -p "Enter post title : " POST_TITLE

POST_FILE="./src/data/blog/$POST_ID.mdx"

if [ -f "$POST_FILE" ]; then
    echo "This post already exists. Do you want to override it?"
    read $YN -p "Overwrite [y/N] "

    if [ "$YN" != "y" ] || [ "$YN" != "Y" ]; then
        rm "$POST_FILE"
    fi
fi

touch "$POST_FILE"

echo "---" >> "$POST_FILE"
echo "id: $POST_ID" >> "$POST_FILE"
echo "title: $POST_TITLE" >> "$POST_FILE"
echo "date: $(date -Is)" >> "$POST_FILE"
echo "summary: >" >> "$POST_FILE"
echo "" >> "$POST_FILE"
echo "---" >> "$POST_FILE"
echo "" >> "$POST_FILE"
echo "" >> "$POST_FILE"
