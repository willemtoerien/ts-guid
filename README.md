# ts-guid

**ts-guid** provides functionality for simple Guids.

## Index
- [Installation](#Installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Usage](#Usage)
  - [Guid](#Guid)
  - [emptyGuid](#emptyGuid)
  - [isGuid](#isGuid)
  - [newGuid](#newGuid)


## Installation
This section shows how to install **ts-guid**.

### npm
```cmd
npm install --save ts-guid 
```

### yarn
```cmd
yarn add ts-guid
```

## Usage
This section shows how to use the features of **ts-guid**.

### Guid
The `Guid` is a global type definition. That means there is no importing required.

```typescript
declare namespace Models {
  interface User {
    id: Guid;
  }
}
```

### emptyGuid
This is an empty `Guid` constant.

```typescript
import { emptyGuid } from 'ts-node';

const user: Models.User = {
  id: emptyGuid
};
```

### isGuid
Checks if a string is a `Guid`.

```typescript
import { isGuid } from 'ts-node';

export function validateUser(user: Models.User): boolean {
  return isGuid(user.Id);
}

```

### newGuid
Generates a new `Guid`.

```typescript
import { newGuid } from 'ts-node';

const user: User = {
  id: newGuid
};
```