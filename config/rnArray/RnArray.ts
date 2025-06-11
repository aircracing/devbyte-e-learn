import iconrn from "@/public/rn.png";

const one = `React Native is an open-source framework developed by Facebook (now Meta) that allows developers to build mobile applications using JavaScript and React. Unlike traditional native mobile development, which requires separate codebases for iOS and Android, React Native enables developers to write a single codebase that can run on both platforms, with native performance.React Native works by using native components for rendering views and accessing platform APIs, while the business logic (the app's functionality) is written in JavaScript. It allows developers to create apps that are nearly indistinguishable from those written in Java (for Android) or Swift/Objective-C (for iOS).`;
const two = `Cross-Platform Development: The most significant advantage is the ability to write one codebase for both iOS and Android, which saves time and effort.
Performance: While not as fast as fully native apps, React Native applications perform quite well due to its ability to leverage native components.
Large Community & Ecosystem: React Native benefits from the huge React community, which contributes libraries, tools, and best practices.
Hot Reloading: Developers can see changes in real time during development without rebuilding the entire app.
Native Modules & Bridge: If specific native functionality is required, React Native allows you to integrate with native modules (Java, Swift, Objective-C) through a bridge, ensuring you can access full device capabilities.
Code Reusability: A large portion of the code can be reused for both platforms, reducing duplication and maintenance costs.`;
const three = `Cross-Platform Compatibility: Write one codebase for both Android and iOS.
Native-Like Performance: React Native uses native components, making the performance close to native apps.
Faster Development: Hot reloading and live updates speed up the development cycle, allowing for rapid iteration.
Access to Native Modules: For advanced features, React Native allows you to integrate native code and use platform-specific APIs.
Large Ecosystem: Being based on JavaScript and React, it enjoys the support of a large number of libraries, tools, and third-party packages.
Open-Source: React Native is open-source, meaning it's free to use and has a large community for support.
Simplified Maintenance: Since you maintain one codebase, updates and bug fixes are easier to manage and deploy.`;
const four = `Performance Issues for Complex Apps: While React Native performs well for most apps, complex or resource-intensive apps (e.g., games or heavy animations) might face performance bottlenecks.
Native Modules for Advanced Features: While React Native can access native APIs, some advanced platform-specific features might require writing custom native code, which increases development time.
Limited Third-Party Libraries: While the ecosystem is vast, not all third-party libraries have support for React Native, and sometimes you might have to write custom bridges.
Updates & Breaking Changes: React Native’s fast-paced development can lead to breaking changes in new versions, requiring constant updates and refactoring.
UI Consistency: Achieving consistent UI across both platforms can be tricky, especially with different design guidelines (Material Design for Android and Human Interface Guidelines for iOS).
Large Bundle Size: React Native apps tend to have a larger bundle size compared to native apps, which might affect app performance on lower-end devices.`;
const five = `
What is React Native?
React Native is an open-source framework developed by Facebook (now Meta) that allows developers to build mobile applications using JavaScript and React. Unlike traditional native mobile development, which requires separate codebases for iOS and Android, React Native enables developers to write a single codebase that can run on both platforms, with native performance.

React Native works by using native components for rendering views and accessing platform APIs, while the business logic (the app's functionality) is written in JavaScript. It allows developers to create apps that are nearly indistinguishable from those written in Java (for Android) or Swift/Objective-C (for iOS).

Why Use React Native?
Cross-Platform Development: The most significant advantage is the ability to write one codebase for both iOS and Android, which saves time and effort.
Performance: While not as fast as fully native apps, React Native applications perform quite well due to its ability to leverage native components.
Large Community & Ecosystem: React Native benefits from the huge React community, which contributes libraries, tools, and best practices.
Hot Reloading: Developers can see changes in real time during development without rebuilding the entire app.
Native Modules & Bridge: If specific native functionality is required, React Native allows you to integrate with native modules (Java, Swift, Objective-C) through a bridge, ensuring you can access full device capabilities.
Code Reusability: A large portion of the code can be reused for both platforms, reducing duplication and maintenance costs.
Advantages of React Native
Cross-Platform Compatibility: Write one codebase for both Android and iOS.
Native-Like Performance: React Native uses native components, making the performance close to native apps.
Faster Development: Hot reloading and live updates speed up the development cycle, allowing for rapid iteration.
Access to Native Modules: For advanced features, React Native allows you to integrate native code and use platform-specific APIs.
Large Ecosystem: Being based on JavaScript and React, it enjoys the support of a large number of libraries, tools, and third-party packages.
Open-Source: React Native is open-source, meaning it's free to use and has a large community for support.
Simplified Maintenance: Since you maintain one codebase, updates and bug fixes are easier to manage and deploy.
Disadvantages of React Native
Performance Issues for Complex Apps: While React Native performs well for most apps, complex or resource-intensive apps (e.g., games or heavy animations) might face performance bottlenecks.
Native Modules for Advanced Features: While React Native can access native APIs, some advanced platform-specific features might require writing custom native code, which increases development time.
Limited Third-Party Libraries: While the ecosystem is vast, not all third-party libraries have support for React Native, and sometimes you might have to write custom bridges.
Updates & Breaking Changes: React Native’s fast-paced development can lead to breaking changes in new versions, requiring constant updates and refactoring.
UI Consistency: Achieving consistent UI across both platforms can be tricky, especially with different design guidelines (Material Design for Android and Human Interface Guidelines for iOS).
Large Bundle Size: React Native apps tend to have a larger bundle size compared to native apps, which might affect app performance on lower-end devices.
Major Apps Built with React Native
React Native is used by several high-profile apps, demonstrating its scalability and performance. Some of these include:

Facebook: The original app that led to the creation of React Native.
Instagram: Instagram migrated to React Native to improve development speed across platforms.
Airbnb: Airbnb used React Native for their mobile platform (though they later moved away, their initial experience was widely regarded as positive).
Walmart: Walmart used React Native to enhance the performance of its app across Android and iOS.
Bloomberg: Bloomberg's new app is built using React Native for its dynamic features and real-time data updates.
Skype: Microsoft revamped Skype using React Native, enhancing its performance and feature set across both platforms.
Uber Eats: Uber Eats uses React Native for certain features in their app to enhance efficiency and maintain a single codebase.
Tesla: Tesla's mobile app is partly built with React Native, providing users with a seamless experience on both iOS and Android devices.
Discord: The popular voice chat app Discord uses React Native for both iOS and Android, providing high performance and smooth interaction.`;
const six = `Since 2018, the React Native team has been redesigning the core internals of React Native to enable developers to create higher-quality experiences. As of 2024, this version of React Native has been proven at scale and powers production apps by Meta.

The term New Architecture refers to both the new framework architecture and the work to bring it to open source.

The New Architecture has been available for experimental opt-in as of React Native 0.68 with continued improvements in every subsequent release. The team is now working to make this the default experience for the React Native open source ecosystem.

Why a New Architecture?
After many years of building with React Native, the team identified a set of limitations that prevented developers from crafting certain experiences with a high polish. These limitations were fundamental to the existing design of the framework, so the New Architecture started as an investment in the future of React Native.

The New Architecture unlocks capabilities and improvements that were impossible in the legacy architecture.

Synchronous Layout and Effects
Building adaptive UI experiences often requires measuring the size and position of your views and adjusting layout.

Today, you would use the onLayout event to get the layout information of a view and make any adjustments. However, state updates within the onLayout callback may apply after painting the previous render. This means that users may see intermediate states or visual jumps between rendering the initial layout and responding to layout measurements.

With the New Architecture, we can avoid this issue entirely with synchronous access to layout information and properly scheduled updates such that no intermediate state is visible to users.`;

export const rnIntro = [
  {
    heading: "1. Introduction to JavaScript",
    
    bulletpoints: [
      {
        bulletHeading: "What is React Native?",
        points: [one],
      },
      {
        bulletHeading: "Why Use React Native?",
        points: [two],
      },
      {
        bulletHeading: "Advantages of React Native",
        points: [three],
      },
      {
        bulletHeading: "Disadvantages of React Native",
        points: [four],
      },
      {
        bulletHeading: "Major Apps Built with React Native",
        points: [five],
      },
      {
        bulletHeading: "About the New Architecture",
        points: [six],
      },
    ],
  },
];

export const rnHook = [
  {
    heading: "Hooks",
    
    bulletpoints: [
      {
        bulletHeading: "Hooks",
        points: [
          `Hooks were added to React in version 16.8.
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
Although Hooks generally replace class components, there are no plans to remove classes from React.
`,
        ],
      },
      {
        bulletHeading: "What is a Hook?",
        points: [
          `Hooks allow us to "hook" into React features such as state and lifecycle methods.`,
        ],
      },
      {
        bulletHeading: "Hook Rules",
        points: [
          "There are 3 rules for hooks:",
          "1 Hooks can only be called inside React function components.",
          "2 Hooks can only be called at the top level of a component.",
          "3 Hooks cannot be conditional\n",
        ],
      },
      {
        bulletHeading: "Custom Hooks",
        points: [
          `If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.`,
        ],
      },
      {
        bulletHeading: "useState",
        points: [
          "The useState hook is used to add state variables to functional components in React.",
          " Before React Hooks, state could only be used in class components",
          "useState allows you to declare a state variable and update its value within functional components.",
          "Syntax: const [state, setState] = useState(initialValue)",
          " state: The current value of the state.\nsetState: A function used to update the state.\ninitialValue: The initial value of the state when the component mounts.",
        ],
      },
      {
        bulletHeading: "useEffect",
        points: [
          "The useEffect hook is used to perform side effects in functional components. It runs after the component renders and can be used for tasks such as data fetching, subscriptions, manual DOM manipulation, or setting up event listeners.\nIt is an alternative to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.",
          `Syntax:useEffect(() => {
           // Your effect code here (side-effect)
           return () => {
           // Cleanup code (optional)
            };
            }, [dependencies]);`,
          "The effect function runs after the render is committed to the screen.",
          "The optional cleanup function is run when the component is unmounted or before the effect re-runs.",
          "The dependency array tells React when to re-run the effect. If it's empty ([]), the effect runs only once when the component mounts.",
        ],
      },
      {
        bulletHeading: "useContext",
        points: [
          "The useContext hook is used to access values from a React context. Context allows you to share data (like themes, user authentication, etc.) across the component tree without passing props manually at every level. The useContext hook simplifies consuming context values in functional components.",
          "Syntax: const value = useContext(MyContext);",
          "MyContext: The context object created using React.createContext().value: The current value of the context.",
          `Example: import React, { createContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Current Theme: {theme}</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  // Access the theme value from the context
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
    <p>Themed Component with {theme} theme!</p>
  </div>;
}

export default App;`,
          `Explanation : Creating the context: const ThemeContext = createContext('light'); creates a context with a default value ('light').
Providing the context: The ThemeContext.Provider wraps the component tree and provides the theme state to all components inside it.
Consuming the context: The useContext(ThemeContext) hook is used inside ThemedComponent to access the current value of the ThemeContext.`,
          `Key Points: Context Provider: To use useContext, the component must be a descendant of a Context Provider (ThemeContext.Provider in this case).
Reactivity: If the value of the context changes, all components consuming that context will re-render.
useContext helps avoid prop drilling, making it easier to pass data through multiple layers of components.,`,
        ],
      },
      {
        bulletHeading: "useRef",
        points: [
          "In React Native, the useRef hook functions the same way as in React, but since we're building mobile apps, its application can be especially useful for managing direct references to native components (e.g., focusing an input, interacting with an animation, or tracking values across renders).\nIt doesn't cause re-renders when its value is updated, making it perfect for certain use cases in mobile development.",
          "Key Use Cases for useRef in React Native:",
          "1. Accessing Native Components (e.g., TextInput, View)",
          "2. Storing Mutable Values Without Re-rendering",
          "3. Managing Animations",
          "4. Tracking Focus or Gestures",
          "5. Storing Timers and Interval References",
          "Syntax: const myRef = useRef(initialValue);",
          "myRef will hold a reference to a React Native component or any value that you want to persist across renders.\nThe initial value can be null or any object.",
          `Example: import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function FocusInput() {
  // Create a ref for the TextInput component
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the TextInput when the button is clicked
    inputRef.current.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput 
        ref={inputRef}
        style={styles.input}
        placeholder="Click the button to focus"
      />
      <Button title="Focus Input" onPress={handleFocus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default FocusInput;`,
          `Explanation: inputRef: We create a reference using useRef(null) and assign it to the TextInput via the ref prop.
handleFocus: When the button is pressed, we call inputRef.current.focus(), which focuses the input element. This interaction happens without causing a re-render of the component.`,
          `Conclusion : useRef is just as powerful in React Native as it is in React, providing the ability to reference native components, manage animations, persist values across renders, and handle gestures. It's particularly useful when you need to avoid unnecessary re-renders while still maintaining a mutable value that should not affect the UI.`,
          `Key Takeaways : useRef does not trigger re-renders when updated.`,
        ],
      },
      {
        bulletHeading: "useCallback",
        points: [
          "In React and React Native, useCallback is used to memoize functions so they are not recreated on every render. It is particularly useful when passing functions as props to child components to avoid unnecessary re-renders.",
          "Key Use Cases for useCallback in React Native:",
          "1. Preventing Unnecessary Re-renders: Useful when passing functions as props to child components.",
          "2. Performance Optimization: Memoizing functions can help avoid re-creation of the same function on every render.",
          "3. Passing Callback Functions to Child Components: Ensures that the child components do not re-render unnecessarily due to prop changes.",
          `Basic Structure of useCallback : const memoizedCallback = useCallback(() => {
  // function body
}, [dependencies])`,
          `memoizedCallback: The memoized version of the callback function.`,
          ` dependencies: An array of dependencies that will trigger the function to be recreated when they change. If the array is empty, the function is created once and never recreated unless the component is remounted.`,
          `Example :
   import React, { useState, useCallback } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  // Memoized callback using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array ensures the function is not recreated

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={increment} />
      <Text>Current Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
});

export default Counter;
`,
          `Explanation:
useCallback: The increment function is memoized using useCallback to ensure that it is not recreated on every render. This is useful when passing this function to child components, which may otherwise re-render unnecessarily if the function is recreated every time.
Empty Dependency Array: The empty dependency array ensures that the callback function is created once and is stable across renders unless the component is remounted.`,
        ],
      },
      {
        bulletHeading: "useMemo",
        points: [
          "In React and React Native, useMemo is used to memoize the result of an expensive function so it doesn't get recalculated on every render. This can help improve performance, especially in large applications.",

          "Key Use Cases for useMemo in React Native:",
          "1. Optimizing Performance for Expensive Calculations: Use when a calculation is expensive and doesn't need to be recalculated on every render.",
          "2. Memoizing Computation Results: Especially useful when the result of a function is passed down to child components and should remain stable unless necessary.",
          "3. Reducing Re-rendering of Child Components: By memoizing the result of calculations, child components don't get re-rendered unnecessarily.",
          `Basic Structure of useMemo :const memoizedValue = useMemo(() => {
  // expensive calculation
}, [dependencies]);`,
          ` memoizedValue: The memoized value resulting from the calculation.
• dependencies: An array of dependencies that trigger the memoized value to be recalculated when they change. If the array is empty, the value is computed once and never recalculated.`,
          `Example :
  import React, { useState, useMemo } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function MemoExample() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  // Memoizing the result of an expensive calculation
  const reversedInput = useMemo(() => {
    console.log('Reversing input...');
    return input.split('').reverse().join('');
  }, [input]); // Only recompute when 'input' changes

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type something"
      />
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Text>Reversed Input: {reversedInput}</Text>
      <Text>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default MemoExample;
`,
          `Explanation:
useCallback: The increment function is memoized using useCallback to ensure that it is not recreated on every render. This is useful when passing this function to child components, which may otherwise re-render unnecessarily if the function is recreated every time.
Empty Dependency Array: The empty dependency array ensures that the callback function is created once and is stable across renders unless the component is remounted.`,
        ],
      },
      {
         bulletHeading: "useReducer",
        points:[
  "In React and React Native, useReducer is ideal for scenarios where state logic becomes too complex for useState. It allows you to centralize your state management logic into a reducer function and manage more sophisticated state transitions.",
  "Key Use Cases for useRef in React Native:",
  "1.Handling Complex State Transitions: When your state has multiple sub-values or requires complex logic.",
  "2. Multiple State Updates: When several actions might update state in different ways, useReducer can help keep everything organized.",
  "3. Performance Optimization: When you need to manage state updates that are complex and may trigger multiple re-renders, useReducer can be more efficient.",
  `Basic Structure of Reducer Function :function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, ...updatedValues };
    default:
      return state;
  }
}`,
  `  state: The current state value.
• dispatch: The function used to send actions to the reducer.
• reducer: A function that defines how the state changes based on the action.
• initialState: The initial state value.`,
  `Example :
   import React, { useReducer } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// Initial state for the form
const initialState = {
  name: '',
  email: '',
};

// Reducer function to handle form updates
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', state);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={state.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={state.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>Form Data: {JSON.stringify(state)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default Form;
`,
  `Explanation:
initialState: The initial state is an object with name and email fields, both starting as empty strings.
formReducer: The reducer has a case for updating form fields. The action contains the field (name or email) and the new value.
handleChange: This function dispatches an action to update the relevant field in the state whenever a user types into the TextInput.
handleSubmit: On form submission, the current form state is logged to the console.`,
]

      },
      {
        bulletHeading: "Custom Hooks",
        points: [
          "In React and React Native, custom hooks are a great way to reuse logic across multiple components. A custom hook allows you to extract component logic into reusable functions.",

          "Key Use Cases for Custom Hooks in React Native:",
          "1.  Reusable Logic: Extract logic that is shared across different components into custom hooks.",
          "2. Code Organization: Helps in organizing and reusing complex logic, like form handling, fetching data, etc",
          "3. Simplifying Components: Makes components more readable and focused by extracting logic into separate hooks",
          `Basic Structure of Custom Hook :const useCustomHook = () => {
  // custom logic
  return value;
};`,
          ` useCustomHook: The function that encapsulates the logic you want to reuse.
• return: Custom hooks usually return an object or a set of values that the component can use.`,
          `import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// Custom Hook: useCounter
const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Text>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
});

export default Counter;
`,
          `Explanation:
useCounter: In the example, the useCounter custom hook is created to manage the count state and provide functions to increment and decrement the count. This logic can be reused across any component that needs counter functionality.
Modular Logic: The custom hook abstracts the counter logic, keeping the component code clean and easy to understand. You can use this hook in any other component that needs the same counter behavior`,
        ],
      },
    ],
  },
];



export const expoVsCli = [
  {
    heading: "Expo vs React Native CLI",
    
    bulletpoints: [
      {
        bulletHeading: "What is Expo?",
        points: [
          "Expo is a framework and platform for universal React applications that provides a set of tools and services built around React Native.",
          "It enables developers to build React Native apps without needing to configure native code manually.",
          "Expo comes with its own CLI (Expo CLI), which streamlines the development process."
        ],
      },
      {
        bulletHeading: "What is React Native CLI?",
        points: [
          "React Native CLI is the official command-line interface provided by the React Native team.",
          "It allows for full control over the native code (Java/Kotlin for Android and Objective-C/Swift for iOS).",
          "Ideal for advanced customization and integration of third-party native modules."
        ],
      },
      {
        bulletHeading: "Advantages of Using Expo",
        points: [
          "Faster setup and easier onboarding for beginners.",
          "No need to install Android Studio or Xcode for initial development and testing.",
          "Includes a large set of pre-built components and APIs (e.g., camera, location, notifications).",
          "Over-the-air (OTA) updates via Expo Go app without going through the App Store/Play Store."
        ],
      },
      {
        bulletHeading: "Disadvantages of Using Expo",
        points: [
          "Limited access to native modules — if a native module isn’t supported by Expo, developers must eject to use it.",
          "Larger app size due to bundled libraries.",
          "Ejecting to bare workflow introduces complexity similar to using React Native CLI from the start."
        ],
      },
      {
        bulletHeading: "Advantages of Using React Native CLI",
        points: [
          "Full control over the native code, ideal for apps needing native customization.",
          "Better suited for production-grade apps with custom native module integration.",
          "No limitations in terms of third-party native libraries or platform APIs."
        ],
      },
      {
        bulletHeading: "Disadvantages of Using React Native CLI",
        points: [
          "Steeper learning curve, especially for developers without native development experience.",
          "Requires manual setup of Android Studio, Xcode, and environment configuration.",
          "Slower initial development process compared to Expo."
        ],
      },
      {
        bulletHeading: "When to Use Expo or React Native CLI",
        points: [
          "Use **Expo** if you're prototyping, building small-to-medium apps, or prefer simplicity and speed.",
          "Use **React Native CLI** if your app requires deep native functionality, high performance, or custom native modules.",
          "You can start with Expo and eject to the bare workflow later if needed."
        ],
      },
    ],
  },
];

export const reactNativeArchitecture = [
  {
    heading: "React Native Architecture",

    bulletpoints: [
      {
        bulletHeading: "What is React Native Architecture?",
        points: [
          "React Native architecture refers to the design and structure that allows JavaScript code to communicate with native platforms (iOS and Android).",
          "It enables React components to invoke native functionalities like camera, geolocation, etc., using a bridge between JavaScript and native code.",
          "The architecture has evolved over time, moving from a traditional Bridge-based system to the new Fabric architecture."
        ],
      },
      {
        bulletHeading: "Old Architecture (Bridge-Based)",
        points: [
          "Uses a **JavaScript Bridge** to facilitate asynchronous communication between JavaScript and native modules.",
          "JS code runs on a separate JavaScript thread, and native modules run on their own threads.",
          "Messages pass back and forth via serialized JSON over the Bridge, which introduces latency and performance issues.",
          "This model sometimes causes UI lag, especially in complex apps or animations."
        ],
      },
      {
        bulletHeading: "New Architecture Overview (Fabric + TurboModules + JSI)",
        points: [
          "The new architecture is built around three key components: **Fabric**, **TurboModules**, and **JSI (JavaScript Interface)**.",
          "It enables synchronous and asynchronous calls between JS and native code without the bottleneck of the traditional Bridge.",
          "Enhances performance, concurrency, and UI responsiveness, especially for large-scale apps."
        ],
      },
      {
        bulletHeading: "What is JSI (JavaScript Interface)?",
        points: [
          "JSI is a lightweight and high-performance interface that allows JavaScript to call native functions directly.",
          "Eliminates the need for the traditional Bridge by embedding native objects directly in JS runtime.",
          "Makes the app faster and more efficient by reducing the serialization and deserialization overhead."
        ],
      },
      {
        bulletHeading: "What are TurboModules?",
        points: [
          "TurboModules are the new way of creating native modules that take advantage of JSI.",
          "They allow on-demand loading of modules, improving startup time and memory usage.",
          "Modules are lazy-loaded, meaning they are only initialized when needed by the JS code."
        ],
      },
      {
        bulletHeading: "What is Fabric?",
        points: [
          "Fabric is the new rendering system in React Native, replacing the legacy UIManager.",
          "It uses a concurrent rendering approach, integrated with React 18’s concurrent mode.",
          "Improves UI consistency, responsiveness, and performance by rendering views directly via C++ code paths."
        ],
      },
      {
        bulletHeading: "Benefits of the New Architecture",
        points: [
          "Faster and more reliable communication between JavaScript and native code.",
          "Improved startup time and reduced memory usage via TurboModules.",
          "Better UI rendering performance through Fabric and concurrent rendering.",
          "Enhanced developer experience and potential for more powerful native integrations."
        ],
      },
      {
        bulletHeading: "Challenges and Adoption Considerations",
        points: [
          "New architecture adoption requires upgrading to the latest React Native versions.",
          "Custom native modules need to be updated to support JSI and TurboModules.",
          "Full migration can be complex for large or legacy codebases but offers long-term benefits."
        ],
      },
      {
        bulletHeading: "When Should You Use the New Architecture?",
        points: [
          "Ideal for performance-critical apps with complex native integrations.",
          "Recommended if you're starting a new project with React Native 0.71+.",
          "Existing apps should plan migration strategically to gain performance and maintainability benefits."
        ],
      },
    ],
  },
];


export const ReactNativeArray: any[] = [
  {
    id: "React-Native-Intro",
    topic: "React-Native Intro",
    type: "rn",
    icon: iconrn,
    pagesInfoArr: rnIntro,
  },
  {
    id: "React-Native-Architecture",
    topic: "React Native Architecture",
    type: "rn",
    icon: iconrn,
    pagesInfoArr: reactNativeArchitecture,
  },
  
  {
    id: "expoVsCli",
    topic: "Expo Vs Cli",
    type: "rn",
    icon: iconrn,
    pagesInfoArr: expoVsCli,
  },
  {
    id: "Hooks",
    topic: "Hooks",
    type: "rn",
    icon: iconrn,
    pagesInfoArr: rnHook,
  },
];
