#!/bin/bash

echo -e "\nDeploying..."

scp -r ~/Documents/Apps/racing-strats/* root@142.93.114.5:/srv/www/racing-strats/

echo -e "\nDeploying complete."
