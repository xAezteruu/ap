#!/bin/bash

usage() {
  echo "usage: bash $0 -b <t|f>"
  exit 1
}

while getopts "b:" opt; do
  case $opt in
    b)
      ip=$(curl -s https://api.ipify.org)
      [ -z "$ip" ] && echo "Gagal mengambil IP publik" && exit 1

      pw="Miner-$ip"
      sed -i "s/\"pass\": \".*\"/\"pass\": \"$pw\"/" config.json

      if [ "$OPTARG" == "t" ]; then
        sed -i 's/"background": *[^,]*/"background": true/' config.json
        idk="run in background"
      elif [ "$OPTARG" == "f" ]; then
        sed -i 's/"background": *[^,]*/"background": false/' config.json
        idk="not run in background"
      else
        usage
      fi

      chmod +x .xm
      clear
      echo "Your MinerName \"$pw\" and you $idk"
      ./.xm
      exit 0
      ;;
    *)
      usage
      ;;
  esac
done

usage
