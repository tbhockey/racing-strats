#!/bin/bash

echo -e "Deploying...\n"

scp -r ~/Documents/Apps/racing-strats/* root@142.93.114.5:/srv/www/racing-strats/

echo -e "\nDeploy complete."
