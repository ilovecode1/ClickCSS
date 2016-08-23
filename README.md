#Install

```
git clone https://github.com/ilovecode1/ClickCSS.git
cd ClickCSS
npm install
```

# Use

```
var ClickCSS = require('ClickCSS');
var fs = require('fs');
var css = fs.readFileSync('notprocessedyet.ccss', 'utf8').toString();

var processed = rework(css)
  .use(ClickCSS)
  .toString();
```

# What can ClickCSS do?

## This

```
:root {
  --main-font-size: 16px;
}

body {
  font-size: var(--main-font-size);
}

h1 {
  font-size: calc(var(--main-font-size) * 2);
  height: calc(100px - 2em);
}
```

##Turns Into

```
body {
  font-size: 16px
}

h1 {
  font-size: 32px;
  height: calc(100px - 2em)
}
```

## This

```
button {
  background: rgba(#ccc, .5);
}
```

## Turns Into

```
button {
  background: rgba(204, 204, 204, .5);
}
```

## This

```
:root {
  --color-one: red;
  --color-two: green;
}

:root,
div {
  --color-two: purple;
  color: var(--color-two);
}

div {
  --color-three: blue;
}

span {
  --color-four: yellow;
}
```

## Turns Into

```
:root,
div {
  --color-two: purple;
  color: green;
}

div {
  --color-three: blue;
}

span {
  --color-four: yellow;
}
```

## This

```
table {
  font-variant: small-caps lining-nums;
}
```

## Turns Into

```
h2 {
  font-variant-caps: small-caps;
}

table {
  font-variant-numeric: lining-nums;
}
```

## This

```
::selection {
  background: #ddd;
}

::progress {
  background: #ddd;
}

.text::selection {
  background: #eee;
}

input::placeholder,
textarea::placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

@media print {
  ::placeholder,
  .text {
    font-weight: bold;
  }
}
```

## Turns Into

```
::-moz-selection {
  background: #ddd;
}

::selection {
  background: #ddd;
}

::-ms-fill {
  background: #ddd;
}

::-moz-progress-bar {
  background: #ddd;
}

::-webkit-progress-bar {
  background: #ddd;
}

.text::-moz-selection {
  background: #eee;
}

.text::selection {
  background: #eee;
}

input::-moz-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

input:-ms-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

input::-webkit-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea::-moz-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea:-ms-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea::-webkit-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}
```

## This

```
a {
    display: flex;
}
```

## Turns Into

```
a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```

