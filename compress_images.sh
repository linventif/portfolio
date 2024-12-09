#!/bin/bash

# Path to the folder
FOLDER="$1"

# Check if the folder path is provided
if [ -z "$FOLDER" ]; then
  echo "Usage: $0 <folder>"
  exit 1
fi

# Compress JPEG images > 1MB
find "$FOLDER" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec jpegoptim --max=70 {} \;

# Compress PNG images > 1MB
find "$FOLDER" -type f -iname "*.png" -exec pngquant --force --ext .png --quality=65-80 {} \;

# Resize images > 1MB
find "$FOLDER" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec mogrify -resize 1024x {} \;


echo "Compression completed for files > 1MB!"