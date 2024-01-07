### To build this image

```bash
  docker build -t custom-user-node-app .
```

### To run this image

- We've allocated the port here using the -e tag, enabling our app to access it via its environment.

- After setting up a user and group, we've proceeded to execute our Docker application with security measures in place.

```bash
  docker run --name node-app -e PORT=8000 -d -p 8000:8000 custom-user-node-app
```
