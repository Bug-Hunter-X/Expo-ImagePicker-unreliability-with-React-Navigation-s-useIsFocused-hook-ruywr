# Expo ImagePicker Issue with React Navigation's useIsFocused Hook

This repository demonstrates a bug where the Expo ImagePicker library exhibits unreliable behavior when used in conjunction with React Navigation's `useIsFocused` hook.  Specifically, launching the image picker from a component that isn't currently focused may lead to unexpected issues such as the picker failing to open, or even app crashes.

The primary cause seems to be related to the asynchronous nature of the ImagePicker's launch process conflicting with the focus state management of React Navigation.  The provided solution addresses this by ensuring that the image picker is only launched when the component is active and focused.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the `bug.js` file and examine the problematic code.
3. Run the app using Expo Go or a similar emulator/device.
4. Attempt to select an image from a component that's not currently in focus (e.g., navigate to another screen and then back).
5. Observe the erratic behavior of the ImagePicker.

## Solution

The `bugSolution.js` file illustrates a corrected implementation. This solution includes an additional check to ensure the component's focus state before launching the image picker. This prevents the picker from initiating while the component is inactive, thereby resolving the unexpected behavior and potential crashes.  This solution prioritizes a more robust method that waits for the component to be focused before initiating.