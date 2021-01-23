# neumorphic-ui

This package based on [@reactivers/generic-ui](https://github.com/mrtgny/generic-ui) and it
uses [@reactivers/hooks](https://github.com/mrtgny/hooks).

# Demo

Live [demo](https://takvim.tk)

# Usage

```js
...
import {Neumorphic, Card, Button} from "@reactivers/neumorphic-ui";

...

const Sample = (props) => {
    return (
        <div>
            <Card title="Neumorphic Sample">
                <Neumorphic>
                    <div>Also Neumorphic Sample</div>
                </Neumorphic>
                <Button>Click Me!</Button>
            </Card>
        </div>
    )
}
```
