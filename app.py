# Importa as bibliotecas necessarias
from types import MethodType
from flask import Flask, render_template, jsonify, request
import requests


# Cria a instancia do App Flask 
app = Flask(__name__)

def getUrl():
    response = requests.get('http://192.168.1.115:9600/_node/stats/pipelines')
    return response.text

# Cria a rota do Flask ao acessar a raiz
@app.route('/')
# Funcao Home
def home():
    return render_template('index.html')

@app.route('/logstash', methods=["POST"])
def logstash():
    logstash_request = getUrl()
    return jsonify({'output' : logstash_request})


# Instancia o main do script
if __name__ == "__main__":
    # Executa a aplicacao no modo Debug e com acesso a todos
    app.run(host="0.0.0.0", debug=True)
