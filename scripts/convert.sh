#!/bin/bash

# Defaults
dir=.

while getopts 'd:' flag; do
  case "${flag}" in
    d)
      dir="${OPTARG}"
      ;;
    *)
      error "Unexpected option ${flag}"
      ;;
  esac
done

movieFiles=()
while IFS=  read -r -d $'\0'; do
    movieFiles+=("$REPLY")
done < <(find ${dir} -name "*.avi" -print0)

## now loop through the above array
for avi in "${movieFiles[@]}"
do
   mp4=${avi/.avi/.mp4}
    
   echo "Converting ${avi} to ${mp4}"
   ffmpeg -i ${avi} ${mp4}
   # rm ${avi}
   break
done

