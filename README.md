# jQuery Read More

A lightweight jQuery plugin for creating animated Read more text.


# **Installation**

You can install the file with NPM:

```js
npm install jquery-read-more
```

Or import the file directly from a `<script>` tag:

```js
<script src="lib/jquery-read-more.min.js">
```

You can find the minified file in the git repository.

**Attention!** The plugin needs jQuery in order to work.

<br/>

# **Initialisation**

If you use a module syntax, you can import the plugin with

```js
import './scripts/readMore';
```

If you import the file, the plugin will be loaded when the DOM is ready.

<br/>

# **Usage**

Using the plugin is simple, let's show a minimal example:

```html
<div id="text-container" data-controller="#readMore">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
        dolorum provident rerum aut hic quasi placeat iure tempora laudantium
        ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
    </p>
    <div id="readMore">Read More</div>
</div>
```

Note the `data-controller` attribute that points to the read more `div`. Then activate the plugin from JS:

```js
$("#text-container").readMore({lines: 2});
```

This will clip the text after two lines, adding the ellipsis if the text is truncated.
If the text is shorter than 2 lines, the read more `div` will be hidden and no ellipsis is shown.

It is possible to apply `.readMore({lines: x})` also to multiple elements at once.

# **Interactive Example**

An interactive example is available [here](https://github.com/AndreF010203/jQuery-Read-More)

<br/>

# **Options**

The complete list of options accepted as input:

| Name   |      Required      |  Default Value |  Description |
|:----------:|:-------------:|:------:|:------:|
| lines |   **required** | *none* | The number of lines to show before cutting the text. Is the only mandatory input. |
| readMoreLabel |    *optional*   |   "Read more" | Label for the read more / expand link  |
| readLessLabel | *optional* |    "Read less"  | Label for the read less / collapse link  |
| ellipsis | *optional* |    "..." | Label for the text to add at the end in case of text clamping |
| splitOn | *optional* |    " " | String or regex, define a custom splitting character |

<br/>

# **Methods**

The plugin accepts also the following methods:

| Name   | Usage |     Description      |
|:------:|:-----:|:--------------------:|
| destroy   | `.readMore('destroy')` |     Remove the plugin and reset the initial state      |

<br/>


# **Browser Compatibility**

Tested and working on the following:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/768px-Google_Chrome_icon_%28September_2014%29.svg.png" width="40" height="40"> <span>Chrome 86</span>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/815px-Firefox_logo%2C_2019.svg.png" width="40" height="40"> <span>Firefox 82</span>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/1200px-Internet_Explorer_10%2B11_logo.svg.png" width="40" height="40"> <span>Internet Explorer 11</span>

<img src="https://pic.clubic.com/v1/images/1755232/raw" width="60" height="40"> <span>Edge 86</span>


# **License**

[MIT](./LICENSE)

# **Support**

If you like this plugin, you can support my work with [a beer or a coffe](https://paypal.me/afacchini1)