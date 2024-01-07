### Steps:

- **Create vite app** by running `npm create vite@latest .`

- **Add** `.dockerignore` and write 'node_modules'

- **Create Dockerfile** & add this code.

```dockerfile
FROM node:20-alpine

RUN addgroup -S devs && adduser -S mohit4bug -G devs

USER mohit4bug

WORKDIR /app

COPY --chown=mohit4bug:devs package*.json ./

USER root

RUN chown -R mohit4bug:devs /app

USER mohit4bug

RUN npm install

COPY --chown=mohit4bug:devs . .

CMD npm run dev
```

- **Build Image** by running

```bash
  docker build -t vite-volume-app .
```

- **Run Image**
  - Below command mounts the `src` folder of our file system to `src` folder or container.
  - So we can see changes even in running container when we change anything inside our `src`.

```bash
  docker run --name vite-volume -v "$(pwd)/src":/app/src -p 5173:5173 -d vite-volume-app
```

In case of vite you might want to modify package.json like this.

**From this**

```json
    "scripts": {
    "dev": "vite",
  },
```

**To this**

```json
    "scripts": {
    "dev": "vite --host",
  },
```
