### To build this image

```bash
 docker build -t docker-volume-app .
```

### To run this image

```bash
  docker run --name volume-app -v myvolume:/app/data docker-volume-app
```

- We've labeled our volume as 'myvolume,' and Docker will monitor all activity within the '/app/data' directory contained in that volume.

- If a specific name isn't provided, Docker will generate a random hash to assign a name, and it will perform the same tracking and management for the directory within that volume.

- We can maintain persistence within our control instead of relying on Docker by specifying the paths to our file system and the corresponding Docker locations for integration. This approach ensures that Docker doesn't manage data persistence; rather, we retain control and manage it ourselves.

```bash
  docker run --name volume-app -v "$(pwd)/path":/app/data docker-volume-app
```

Read more on volumes [here.](https://docs.docker.com/storage/volumes/)
