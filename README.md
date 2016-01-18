# TextGround component for React
The template text to show for user while text is loading from server.

## Usage
```
npm i text-ground-react
```

![Example](https://raw.githubusercontent.com/KrickRay/text-ground-react/master/media/sample.png)

```
import TextGround from 'text-ground-react'
...

state = {
    text: <TextGround rows="7" />
}

render() {
    return (
        <p>
            {this.state.text}
        </p>
    );
}

textLoadedHandle(loadedText) {
    this.setState({text: loadedText});
}

...
```

## Properties

- maxRows
- minRows
- rows - the number of rows
- lineMaxWidth - percentage (0.0 .. 1.0)
- lineMinWidth - percentage (0.0 .. 1.0)
- lineHeight - the source from, percentage (0.0 .. 1.0)
- color - CSS color
- seed - if you are using pre render on the server and need the same rendering on the client and on the server

```
defaultProps = {
    maxRows: 1,
    lineMaxWidth: 1.0,
    lineMinWidth: 0.4,
    lineHeight: 0.69,
    color: '#ccc'
};
```