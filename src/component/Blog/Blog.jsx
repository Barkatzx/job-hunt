import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto bg-pink-50 rounded-xl mt-5'>
            <h2 className='text-3xl font-semibold p-5'>Question: When should you use context API?</h2>
            <h2 className='text-xl p-5'>The Context API in React should be used when you need to pass data or state down to deeply nested child components without having to pass props through every level of the component tree. It's particularly useful in cases where multiple components need access to the same data or state, but these components are not directly related to each other in the component tree.
Context API can also be used to avoid prop drilling, which is the process of passing props from a top-level component down to its child components, even if the child components don't need those props directly. Prop drilling can make the code more complex and harder to maintain, especially if you have a large component tree.</h2>
            <h2 className='text-3xl font-semibold p-5'>Question: What is a custom hook?</h2>
            <h2 className='text-xl p-5'>A custom hook is a JavaScript function that starts with the word "use" and can call other hooks or perform some custom logic. The purpose of a custom hook is to allow you to reuse stateful logic across multiple components.
Custom hooks can be used to abstract away complex logic that is reused across components, making it easier to maintain and reuse code. For example, you might have a custom hook that fetches data from an API and returns the response. Then you can use this hook in multiple components that need to fetch data, without having to repeat the same fetch logic.</h2>
            <h2 className='text-3xl font-semibold p-5'>Question: What is useRef?</h2>
            <h2 className='text-xl p-5'>useRef is a hook in React that creates a mutable reference object that persists across re-renders of a component. It is used to keep track of a value or element in a component, similarly to how instance variables work in class components.
useRef returns a plain JavaScript object with a single property, .current, which can be assigned any value. Unlike state variables, changing the .current property of a useRef object does not cause a re-render of the component.</h2>
            <h2 className='text-3xl font-semibold p-5'>Question: What is useMemo?</h2>
            <h2 className='text-xl p-5'>useMemo is a built-in hook in React that allows you to memoize the result of a function call and recompute it only if one of the dependencies changes.
It takes two arguments: a function to compute a value and an array of dependencies. If any of the dependencies change, then the function will be called again and the memoized value will be recomputed. If none of the dependencies change, then the previously memoized value will be returned instead.
The purpose of useMemo is to optimize performance by avoiding unnecessary re-computations. It is useful when you have a function that is expensive to compute and the result is used in rendering, but the function doesn't need to be called every time the component renders. By using useMemo, you can ensure that the function is only called when necessary, and that the expensive computation is only performed when the inputs change.
</h2>
        </div>
    );
};

export default Blog;