## TypeScript training scripts

These are tutorial excersices in terms of the _Microsoft_ online course [Introduction to TypeScript 2](https://www.edx.org/course/introduction-to-typescript-2).

In core it's a simple app with two parts. One is changing the color of `div` blocks 
based on `enum` variable and the second is a dice roller which generates a random 
pair of die values on each click.

Commits history is meaningful as different approaches were used to implement this basic functionality. For example, initially `webpack + hot module replacement` was used to manage TypeScript modules and styling. Then, `SystemJS` was used together with `commonJS` modules (from that point, app is launched at local server via `npm start` command). In the latest version, `RequireJS` with `AMD` modules is used and examples of adding external libraries (with and without `@types`) are also provided.

