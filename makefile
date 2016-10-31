#!/bin/bash
FILES :=                              \
	.gitignore                        \
	.travis.yml                       \
	apiary.apib                       \
	IDB1.log                          \
	models.html                       \
	app/models.py                     \
	app/tests.py                      \
	UML.pdf

check:
	@not_found=0;                                 \
    for i in $(FILES);                            \
    do                                            \
        if [ -e $$i ];                            \
        then                                      \
            echo "$$i found";                     \
        else                                      \
            echo "$$i NOT FOUND";                 \
            not_found=`expr "$$not_found" + "1"`; \
        fi                                        \
    done;                                         \
    if [ $$not_found -ne 0 ];                     \
    then                                          \
        echo "$$not_found failures";              \
        exit 1;                                   \
    fi;                                           \
    echo "success";

html:
	python3 -m pydoc -w app/models.py

log:
	git log > IDB2.log

freeze:
	python3 -m pip freeze > requirements.txt

requirements:
	python3 -m pip install --upgrade pip
	python3 -m pip install -r requirements.txt

server:
	python3 app/app.py

test: html check
