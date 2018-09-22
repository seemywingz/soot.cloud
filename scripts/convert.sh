#!/bin/bash

# Defaults
dir=.
inFormat="avi"
outFormat="mp4"
removeOriginal=false

while getopts 'd:i:o:r' flag; do
  case "${flag}" in
    d)
      dir="${OPTARG}"
      ;;
    i)
      inFormat="${OPTARG}"
      ;;
    o)
      outFormat="${OPTARG}"
      ;;
    r)
      removeOriginal=true
      ;; 
    *)
      error "Unexpected option ${flag}"
      ;;
  esac
done

fileList=()
while IFS=  read -r -d $'\0'; do
    fileList+=("$REPLY")
done < <(find ${dir} -name "*.${inFormat}" -print0)

for inFile in "${fileList[@]}";do
  outFile=${inFile/.${inFormat}/.${outFormat}}
  echo
  echo "Converting:"
  echo "  ${inFile}"
  echo "   to"
  echo "  ${outFile}"
  echo
  
  #ffmpeg -i ${inFile} ${outFile} 2>&1 | tee -a ${dir}/conversion.log 
  
  if [[ $removeOriginal = true ]];then 
    echo "Removing:"
    echo "  ${inFile}"
    #rm ${inFile} 
  fi
  
  break
done

