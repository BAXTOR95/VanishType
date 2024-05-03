import os
from flask import Flask, render_template

app = Flask(__name__, template_folder='web/templates')

PROD = True if os.environ.get('PROD', False) == 'True' else False


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=not PROD)
