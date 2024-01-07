### To build this image

Using the `nginx:1.17.1-alpine` starting image directly to connect to my file system and spot any changes happening live. So no need of Dockerfile

### To run this image
 - Ensure you're in the root directory of your HTML file.
```bash
  docker run --name hello-html-bind --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html -d -p 3000:80 nginx:1.17.1-alpine
```
- Now you can edit the file and see the changes.