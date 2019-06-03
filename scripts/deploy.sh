#!/bin/bash

echo -e "Deploying...\n"

scp -r ~/Documents/Apps/racing-strats/* tony@134.209.70.195:/var/www/racingstrats.com/html

echo -e "\nDeploy complete."
