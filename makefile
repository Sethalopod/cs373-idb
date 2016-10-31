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
	git log > IDB1.log

requirement:
	python3 -m pip freeze > requirments.txt

test: html check
