#!/bin/sh
cd cart;
npm i;
npm run build;
cd ../product;
npm i;
npm run build;
cd ../homepage;
npm i;
