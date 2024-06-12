# Project - Mobile Time Tracking App

## Objective Summary

The objective of this project is to build a Front-End Mobile Time Tracking App based on the provided design template from [Frontend Mentor](https://www.frontendmentor.io).

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## Challenge

Your challenge is to build out this dashboard and get it looking as close to the design as possible.

_Users should be able to:_

> - See hover states for all interactive elements on the page
> - Switch between viewing Daily, Weekly, and Monthly stats
> - The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".

## Process

- [Expo](https://expo.dev) will be used as the development environment.
- App Routing handled through Expo's Stack component built on top of React-Navigation.
- @react-navigation/material-top-tabs" library used for Tab navigation.
- react-native-safe-area-context used to handle top-tabs margin insets.
- React useContext used to manage state persistance through the application.
