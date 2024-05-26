# <img src="public/icons/icon_48.png" width="45" align="left"> rektCaptcha Extension

Standalone version of rektCaptcha for solving reCaptcha only. Since reCaptcha rarely updates, a standalone version is needed. Difference to rektCaptcha is that models are available locally in case the server is down forever.

## Features

- Automatically solve reCaptcha free of charge
- No need to register or login

## Install

**Chrome Web Store:**

Download from [Chrome Web Store](https://chrome.google.com/webstore/detail/rektcaptcha-hcaptcha-solv/bpfdbfnkjelhloljelooneehdalcmljb).

**Firefox Add-ons:**

Download from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/rektcaptcha/).

**Manual Installation:**

0. Go to [Releases](https://github.com/Wikidepia/rektCaptcha-extension/releases)
1. Download the latest `.crx` file
2. Unzip it to a folder 
3. Open `chrome://extensions/` in Chrome
4. Enable `Developer mode`
5. Click `Load unpacked` and select the folder

## How to Build

To build the extension, make sure you have Node.js installed. Then run:

```bash
npm install
npm run build           # to build Google Chrome extension
npm run build:firefox   # to build Firefox extension
```

## Acknowledgment

This project is based on the MIT-licensed [NopeCHA extension](https://github.com/NopeCHALLC/nopecha-extension).

## Support this project

If you find this project useful, please consider donating:

- Ko-fi (PayPal): https://ko-fi.com/wikidepia
- TRON Address (TRX/USDT ONLY): `TDdZgEp9q1LSLiTDSMSUSVuXcHBH2uFXhV`

## Contribution

Suggestions and pull requests are welcomed!.

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)

