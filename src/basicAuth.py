from flask import Flask
from flask import request

app = Flask("web-app")

@app.route('/auth')
def authRouteHandler():
    userName = request.authorization["username"]
    password = request.authorization["password"]

    return userName + passWord

app.run()
