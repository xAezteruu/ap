#!/bin/bash

pw="Miner-$(( (RANDOM << 15 | RANDOM) % 1000000 + 1 ))"
sed -i "s/\"pass\": \".*\"/\"pass\": \"$pw\"/" config.json
chmod +x .xm
clear
./.xm --config config.json
