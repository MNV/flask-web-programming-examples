FROM python:3.8-slim-buster
MAINTAINER Michael Votinov

ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN apt-get update

RUN mkdir /app
WORKDIR /app
COPY ./app /app

RUN adduser --disabled-password --gecos '' python
USER python

ENTRYPOINT ["python"]
CMD ["main.py"]
