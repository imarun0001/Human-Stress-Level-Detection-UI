## **Commands for running the project- Human Stress Level Detection (ML project)**

Open 2 terminals and type below commands in both :

>cd Human-Stress-Level-Detection-UI 


***Only for first time*** you need to use this command(for creating virtual environment)[in 1st terminal only] :

>python -m venv ve  


In both terminal:

>cd ve

>Set-ExecutionPolicy Unrestricted -Scope Process

>.\Scripts\activate

>cd..


***Only for first time*** you need to install libraries(both lines)[in 1st terminal only]:

>pip install -r requirements.txt


In first terminal :

>uvicorn app:app --reload

**click on locahost address which will be shown in terminal after entering above command.**


In second terminal :

>cd react-app

>npm i

>npm run dev

**click on locahost address which will be shown in terminal after entering above command.**


for exit (or closing the server) [for both terminals]:

>ctrl+c and type Y

>cd..

>cd ve

>deactivate