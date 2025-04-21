# Ilyim - Relationship Dashboard Application

## Overview

Ilyim is a custom relationship dashboard application built with React Native and Expo. The app features a personalized login system and dashboard view for couples to track shared information.

## Features

- Secure authentication system
- User-friendly interface
- Dashboard with multiple tabs for different relationship features
- Responsive design optimized for Android devices

## Technology Stack

- React Native
- Expo Router
- JavaScript/TypeScript
- NativeWind (Tailwind CSS for React Native)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16 or newer)
- npm or Yarn package manager
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abuaslamtech/ilyim.git
   cd ilyim
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

## Building for Production

### Android (APK)

To build an APK file:

```bash
eas build --platform android --profile preview
```

### Android (AAB - Google Play)

To build an Android App Bundle for Play Store submission:

```bash
eas build --platform android --profile production
```

## Project Structure

```
ilyim/
├── app/
│   ├── index.js         # Entry point
│   ├── (auth)/
        |__  login.js    # Login screen
│   └── (tabs)/          # Tab navigation
│       ├── index.js     # Dashboard
│       └── ...
├── assets/
│   └── images/
│       └── lock.png     # App assets
├── components/          # Reusable components
├── app.json             # Expo configuration
├── eas.json             # EAS Build configuration
└── package.json         # Dependencies
```

## Configuration

The app uses the following configuration files:

- `app.json` - Expo app configuration
- `eas.json` - EAS Build profiles
- `package.json` - Dependencies and scripts

## Contributing

To contribute to the project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

