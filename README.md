GMaps API Style Encoder
=========

## Synopsis

Small utility to encode your styles when requesting map tiles from Google

Turned into an npm package by myself but based on [posts by Dr.Molle and Manuel Otto on Stack Overflow](http://stackoverflow.com/questions/29692737/customizing-google-map-tile-server-url).

## Usage

Create your own map styling JSON at https://mapstyle.withgoogle.com/, encode it and add it to your tiles URL with the apistyle parameter.

```
#!javascript

import encodedMapStyles from 'google-maps-apistyle-encoder';

styles = [
  {
    "featureType": "administrative.land_parcel",
    "stylers": [{ "visibility": "off" }]
  }
];

const apistyles = encodedMapStyles(styles); // Return s.t%3A21%7Cp.v%3Aoff

const url = 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga&apistyle=' + apistyles
```

**Warning**: It's possible that newer featureTypes or elementTypes are unknown to the encoder. Please open an issue if you see a mismatch.

## Installation

npm i -S google-maps-apistyle-encoder
