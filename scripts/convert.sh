#!/bin/bash

# Defaults
dir=.
inFormat="avi"
outFormat="mp4"
removeOriginal=false
testConversion=false

while getopts 'd:i:o:rt' flag; do
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
    t)
      testConversion=true
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
  echo "  -- to --"
  echo "  ${outFile}"
  echo
  
  if [[ $testConversion = true ]];then
    echo "!! Testing Conversion !!"
    removeOriginal=false
    ffmpeg -i ${inFile} -c:v libx264 -crf 20  -c:a aac -strict -2 -ss 60 -t 60 ${outFile}
  else 
    ffmpeg -i ${inFile} -c:v libx264 -crf 23 -c:a aac -strict -2 ${outFile} 2>&1 | tee -a ${dir}/conversion.log 
  fi
 
  if [[ $removeOriginal = true ]];then 
    echo "Removing:"
    echo "  ${inFile}"
    rm ${inFile} 
  fi
done

