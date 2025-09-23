#!/bin/bash

OUTPUT=modules/content.js
TARGET_DIR="./content"

echo "export const content = [" > $OUTPUT

find $TARGET_DIR -type f |
  sed "s|^|  '|; s|$|',|" >> $OUTPUT

echo "];" >> $OUTPUT
echo "Wrote content array to $OUTPUT"