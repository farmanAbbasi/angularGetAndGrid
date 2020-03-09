# ng build --base-href /static/
from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

app.run()