from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form
    # 处理提交的数据
    #...
    return jsonify({'message': 'Data received successfully'})

if __name__ == '__main__':
    app.run(debug=True)