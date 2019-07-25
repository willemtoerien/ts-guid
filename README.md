# ts-guid

**ts-guid** provides functionality for simple Guids.

## Index

- [Installation](#installation)
  - [npm](#npm)
- [Usage](#usage)
  - [emptyGuid](#emptyguid)
  - [isGuid](#isguid)
  - [newGuid](#newguid)
  - [cli](#cli)

## Installation

This section shows how to install **ts-guid**.

### npm

```sh
npm install --save ts-guid
```

## Usage

This section shows how to use the features of **ts-guid**.

### emptyGuid

This is an empty guid constant.

```typescript
import { emptyGuid } from 'ts-guid';

const user: User = {
  id: emptyGuid
};
```

### isGuid

Checks if a string is a guid.

```typescript
import { isGuid } from 'ts-guid';

export function validateUser(user: User): boolean {
  return isGuid(user.id);
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

### cli

Outputs a new Guid in the terminal.

```
generate-guid
```
