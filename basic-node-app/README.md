### To build this image

```bash
  docker build -t basic-node-app .
```

### To run this image

- We've allocated the port here using the -e tag, enabling our app to access it via its environment.

```bash
  docker run --name node-app -e PORT=8000 -d -p 8000:8000 basic-node-app
```
