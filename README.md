# ts-lazy
.Net Lazy for typescript

## Install

```
npm install ts-lazy --save
```

## Use

```
import { Lazy } from 'ts-lazy';

const lazyValue = new Lazy(() => 'value');
const result = lazyValue.value;
```