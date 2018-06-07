# ts-guid
**ts-guid** provides functionality for simple Guids.

## Index
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Usage](#usage)
  - [emptyGuid](#emptyguid)
  - [isGuid](#isguid)
  - [newGuid](#newguid)

## Installation
This section shows how to install **ts-guid**.

### npm
```
npm install --save ts-guid 
```

### yarn
```
yarn add ts-guid
```

## Usage
This section shows how to use the features of **ts-guid**.

### emptyGuid
This is an empty guid constant.

```typescript
import { emptyGuid } from 'ts-guid';

const user: Models.User = {
  id: emptyGuid
};
```

### isGuid
Checks if a string is a guid.

```typescript
import { isGuid } from 'ts-guid';

export function validateUser(user: Models.User): boolean {
  return isGuid(user.Id);
}

```

### newGuid
Generates a new guid.

```typescript
import { newGuid } from 'ts-guid';

const user: User = {
  id: newGuid()
};
```