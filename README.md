# TextGround component for React
The template text to show for user while text is loading from server.

![Example](https://raw.githubusercontent.com/KrickRay/text-ground-react/master/media/screen.png)

## Usage
```
npm i text-ground-react
```

### Sample

```
import {TextGround} from 'text-ground-react'

class SampleClaass extends React.Component {

    state = {
        text: <TextGround rows={6} />
    };

    render() {
        return (
            <div>
                <h1><TextGround rows={1} color="grey" /></h1>
                <p>{this.state.text}</p>
            </div>
        );
    }

    loadedHandle(loadedText) {
        this.setState({text: loadedText});
    }
}
```

## Properties

- maxRows (>= 1)
- minRows (>= 1)
- rows - the number of rows (>= 1)
- lineMaxWidth - percentage (0.0 .. 1.0)
- lineMinWidth - percentage (0.0 .. 1.0)
- lineHeight - part of the original, percentage (0.0 .. 1.0)
- color - CSS color (#000 or rgb(0,0,0), rgba)
- seed - if you are using pre render on the server and need the same rendering on the client and on the server (>= 0)

```
defaultProps = {
    maxRows: 1,
    lineMaxWidth: 1.0,
    lineMinWidth: 0.4,
    lineHeight: 0.69,
    color: '#ccc'
};
```