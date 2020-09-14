from flask import Flask

app = Flask.app(__name__)

@app.route('/')
def getBase():
    return {'success': True, 'message': 'no API here.'}

@app.route('/search/<q>')
def doSearch(q):
    return {
        []
    }

@app.route('/configuration', methods = ['GET'])
def getConfiguration():
    return {
        []
    }

@app.route('/configuration', methods = ['POST'])
def doConfigure():
    return {
        []
    }

if if __name__ == "__main__":
    pass