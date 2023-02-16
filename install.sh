#!/bin/bash

sudo cp http-proxy.service /lib/systemd/system/http-proxy.service
sudo systemctl daemon-reload
sudo systemctl start http-proxy

echo 'Done';
