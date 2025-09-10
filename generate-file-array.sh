#!/bin/bash

# The output JS file
OUTPUT=txtFiles.js

# Start the JS array
echo "const txtFiles = [" > $OUTPUT

# Add each file in the 'content' directory (relative path), e.g. txt and png
find content -type f \( -name '*.txt' -o -name '*.png' \) |
  sed "s/^/  '/; s/$/',/" >> $OUTPUT

# End the JS array
echo "];" >> $OUTPUT

echo "Wrote JS array to $OUTPUT"