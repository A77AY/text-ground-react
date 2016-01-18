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
...
```