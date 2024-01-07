### To build this image
```bash
 docker build -t hello-nginx-html .
```
### To run this image
```bash
  docker run --name hello-html -d -p 3000:80 hello-nginx-html
```