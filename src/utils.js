'use strict';

export class Time {
  static time() {
    if (!Date.now) {
      Date.now = () => new Date().getTime();
    }
    return Date.now();
  }

  static sleep(i = 1000) {
    return new Promise((resolve) => setTimeout(resolve, i));
  }

  static async random_sleep(min, max) {
    const duration = Math.floor(Math.random() * (max - min) + min);
    return await Time.sleep(duration);
  }
}

export class KVStorage {
  // KVStorage by sending messages to background script
  static async get({ key, tab_specific }) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { type: 'KV_GET', label: { key, tab_specific } },
        (response) => {
          if (response) {
            resolve(response);
          } else {
            reject();
          }
        }
      );
    });
  }
  static async set({ key, value, tab_specific }) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { type: 'KV_SET', label: { key, value, tab_specific } },
        (response) => {
          if (response) {
            resolve(response);
          } else {
            reject();
          }
        }
      );
    });
  }
}

export function SimulateMouseClick(element, clientX = null, clientY = null) {
  if (clientX === null || clientY === null) {
    const box = element.getBoundingClientRect();
    clientX = box.left + box.width / 2;
    clientY = box.top + box.height / 2;
  }

  if (isNaN(clientX) || isNaN(clientY)) {
    return;
  }

  // Send mouseover, mousedown, mouseup, click, mouseout
  const eventNames = [
    'mouseover',
    'mouseenter',
    'mousedown',
    'mouseup',
    'click',
    'mouseout',
  ];
  eventNames.forEach((eventName) => {
    const detail = eventName === 'mouseover' ? 0 : 1;
    const event = new MouseEvent(eventName, {
      detail: detail,
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: clientX,
      clientY: clientY,
    });
    element.dispatchEvent(event);
  });
}
