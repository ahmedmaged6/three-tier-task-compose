FROM python:3.10.12-alpine3.18 

LABEL maintainer="ahmeddmagedd957@gmail.com"

EXPOSE 5000  


WORKDIR /app  

COPY requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt 


COPY . /app


ENTRYPOINT ["python"]
CMD ["app.py"]