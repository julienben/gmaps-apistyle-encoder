'use strict';

/**
 * Encodes Google Maps apistyle parameter
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

module.exports = function (styles) {
  var ret = "";

  var styleparse_types = { "all": "0", "administrative": "1", "administrative.country": "17", "administrative.land_parcel": "21", "administrative.locality": "19", "administrative.neighborhood": "20", "administrative.province": "18", "landscape": "5", "landscape.man_made": "81", "landscape.natural": "82", "poi": "2", "poi.attraction": "37", "poi.business": "33", "poi.government": "34", "poi.medical": "36", "poi.park": "40", "poi.place_of_worship": "38", "poi.school": "35", "poi.sports_complex": "39", "road": "3", "road.arterial": "50", "road.highway": "49", "road.local": "51", "transit": "4", "transit.line": "65", "transit.station": "66", "water": "6" };

  var styleparse_elements = { "all": "a", "geometry": "g", "geometry.fill": "g.f", "geometry.stroke": "g.s", "labels": "l", "labels.icon": "l.i", "labels.text": "l.t", "labels.text.fill": "l.t.f", "labels.text.stroke": "l.t.s" };

  var styleparse_stylers = { "color": "p.c", "gamma": "p.g", "hue": "p.h", "invert_lightness": "p.il", "lightness": "p.l", "saturation": "p.s", "visibility": "p.v", "weight": "p.w" };

  styles.forEach(function (style) {
    if (style.featureType) ret += "s.t:" + styleparse_types[style.featureType] + "|";

    // if !styleparse_elements[style.elementType], the style element is unknown
    if (style.elementType) ret += "s.e:" + styleparse_elements[style.elementType] + "|";

    style.stylers.forEach(function (styler) {
      var keys = [];
      for (var k in styler) {
        if (k === "color" && styler[k].length === 7) styler[k] = "#ff" + styler[k].slice(1);
        ret += styleparse_stylers[k] + ":" + styler[k] + "|";
      }
    });

    ret = ret.slice(0, ret.length - 1);
    ret += ",";
  });

  return encodeURIComponent(ret.slice(0, ret.length - 1));
};
