'use strict';

export function formatPostUrl(host, port) {
  return `http://${host}:${port}/connector/websocket`;
}

export function formatSocketUrl(host, port, socket) {
  return `ws://${host}:${port}/connector/websocket/${socket}`;
}

export function checkForUrl(text) {
  let match = text.match(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"));
  if(match) {
    return match[0];
  } else {
    return false;
  }
}
