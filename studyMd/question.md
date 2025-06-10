# 🔹 Core Concepts
## What is the difference between React and React Native?
Ans : React (React.js) is used to build web applications using HTML, CSS, and JavaScript.

React Native is used to build mobile applications (Android & iOS) using native mobile components (like <View>, <Text>) instead of HTML tags.

React Native allows developers to write code in JavaScript and render native UI elements.
```
// React (Web)
<div>Hello</div>

// React Native
<Text>Hello</Text>
```

## How does the bridge work in React Native?
Ans : React Native uses a bridge to allow communication between JavaScript and native code (Java/Swift).

This bridge is asynchronous, meaning JS and native code can run on different threads.

For example, when you use the camera, React Native sends the command from JS to native code using the bridge.

✅ Think of it as a translator between two different languages (JavaScript and Native).
## What are the pros and cons of using Expo vs React Native CLI?
Ans : [📘(IMAGE)](./expocli.png)
## How does React Native handle styling? How is it different from CSS in web?
Ans : React Native uses inline styles written in JavaScript objects.

It supports only a subset of CSS properties (e.g., no float, no z-index stacking context).

You cannot use IDs, class selectors, or media queries directly.

✅ Example:
```
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20,
  },
});
```
## Explain how the Flexbox layout works in React Native.
Ans : React Native uses Flexbox by default to position elements.

It works similarly to web Flexbox but is more limited.

Important properties:

flexDirection: 'row' or 'column'

justifyContent: Main axis alignment (e.g., center, space-between)

alignItems: Cross-axis alignment

✅ Example:
```
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
```
# 🔹 Components & Architecture

## What are pure components in React Native and when should you use them?
Ans : A PureComponent avoids re-rendering if the props/state haven’t changed.

Useful for performance optimization, especially in long lists.

✅ Functional equivalent:
```
const MyComponent = React.memo((props) => {
  return <Text>{props.name}</Text>;
});
```
## What is the role of FlatList and SectionList? How do they improve performance?
Ans : FlatList: Optimized for rendering large lists by rendering only visible items.

SectionList: Same as FlatList but supports grouping items into sections.

Better than ScrollView which renders everything at once (bad for performance).

✅ Key props: renderItem, data, keyExtractor, onEndReached, ListFooterComponent.
## How would you implement a custom reusable component in React Native?
Ans : Create a new file, define a component that accepts props, and reuse it across your app.
```
const MyButton = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

Use <MyButton title="Login" onPress={handleLogin} /> wherever needed.
```

## How do you handle platform-specific code in React Native?
Ans : Use Platform.OS to detect platform:
Or use file extensions like:

Component.ios.js

Component.android.js

React Native will pick the right file automatically.

## What are controlled and uncontrolled components in context of mobile forms?
Ans : Controlled: Input value is tied to state (useState), giving full control over the field.

Uncontrolled: Value is managed internally by the input field itself.
```
✅ Controlled Example:
const [value, setValue] = useState('');
<TextInput value={value} onChangeText={setValue} />

```
# 🔹 Navigation & State Management
Ans :
## How do you implement navigation in a React Native app using React Navigation?
Ans : https://reactnavigation.org/
## What are the differences between Stack Navigator, Tab Navigator, and Drawer Navigator?
Ans : Stack: Screens pushed on top like a browser.

Tab: Bottom navigation bar.

Drawer: Slide-out side menu.

✅ Combine all three in large apps for a full navigation experience.

## Explain how you have managed global state in a React Native app. Which tools did you use (Redux, Context API, etc.)?
Ans : Use Redux for large, complex apps.

Use Context API for smaller projects.

✅ Redux Example:

Create reducer

Set up store

Use useSelector and useDispatch in components

# 🔹 Native Modules & Integration
Ans : 
## Have you created or used a native module in React Native? Explain the process.
Ans : Yes, when React Native doesn’t support a native feature, you write a native module:

Write Java/Swift code

Expose it via bridge

Import and call it in JS

✅ Used when integrating with a barcode scanner SDK in one of my projects.


# 🔹 Performance Optimization

## What steps do you take to optimize the performance of a large React Native app?
Ans : Avoid anonymous functions in JSX

Use React.memo, useCallback, useMemo

Use FlatList with initialNumToRender, windowSize

Compress and lazy load images

Avoid unnecessary state updates
## How would you prevent unnecessary re-renders in functional components?
Ans : Wrap components with React.memo

Use useCallback to memoize functions passed as props

Use useMemo for expensive calculations
```
const memoizedCallback = useCallback(() => doSomething(id), [id]);

```
## How do you handle memory leaks in React Native apps?
Ans : Always clean up in useEffect:
```
useEffect(() => {
  const sub = subscribe();
  return () => sub.unsubscribe();
}, []);
```
Avoid keeping unused listeners or timers running

Use tools like Flipper to inspect memory usage
# 🔹 Testing, Debugging & Deployment
Ans :
## What tools do you use for debugging React Native applications?
Ans :Flipper: Debug state, logs, network, layout

React Native Debugger: Integrated with Redux DevTools

Console.log: Basic logging

Chrome DevTools: Debug JS code

React DevTools: Inspect component tree
## How do you build and deploy a React Native app for Android and iOS?
Ans :
✅ Android:
```
cd android
./gradlew assembleRelease
```
Find APK in android/app/build/outputs/apk/release.

✅ iOS:

Use Xcode to archive and export.

Or use:
```
xcodebuild -workspace YourApp.xcworkspace -scheme YourApp archive
```
Make sure to sign builds using proper keys and certificates.



