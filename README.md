# Tilde Enhanced Personal

Based on [Ozencb/tilde-enhanced](https://github.com/Ozencb/tilde-enhanced).

## Added/Modified Features
- Nicer clock
- Snowjs, a very cool falling snow animation
- Make it default to use Google
- Exchange searchDelimiter and clock Delimiter
## Usage

- Press `?` or click on the clock to enter nav.
- Press `ESC` to back to clock from nav.
- Entering `t` would redirect you to [translate.google.com](https://translate.google.com).
- Entering `cats` would search by Google
- Entering `d hello` would search `hello` by Duckduckgo
- Entering `b hello` would search `hello` by Baidu
- Entering `y cats` would search
  [Cats on YouTube](https://www.youtube.com/results?search_query=cats).
- Entering `r/r/startpages` would redirect you to
  [www.reddit.com/r/startpages](https://www.reddit.com/r/startpages)
- Entering `h/popular` would redirect you to
  [hypem.com/popular](http://hypem.com/popular).
- Entering `stallman.org` would redirect you to
  [stallman.org](https://stallman.org/).
- Entering `keep.google.com` would redirect you to
  [keep.google.com](https://keep.google.com/).

You can also use `Ctrl + Enter` key combination to launch the query with a `.com` TLD.

### Query Paramater

Additionally, you can pass any query via the `q` query param. For example:

- Going to `file:///path/to/tilde/index.html?q=cats` would search
  [Cats](https://duckduckgo.com/?q=cats).

This allows you to invoke Tilde with your native browser search bar.

## Configuration

Open up the [config.js](js/config.js) file and read through the `CONFIG`!

## Setting it up for new tabs on Firefox

By default Firefox won't let you set a custom URL for new tabs but there is a work-around to circumvent the problem.

You can follow [Urimu's Guide](https://github.com/Urimu/Startpage#setting-it-up-on-firefox) to set your new tab to launch custom URLs.

## License

Feel free to [use this and modify it however you like](https://github.com/Ozencb/tilde-enhanced/blob/master/LICENSE).
