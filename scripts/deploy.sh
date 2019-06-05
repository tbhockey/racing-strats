#!/bin/bash

echo -e "Deploying...\n"

scp -r ~/Documents/Apps/racing-strats/* tony@68.183.17.207:/var/www/racingstrats.com/html

echo -e "\nDeploy complete."
