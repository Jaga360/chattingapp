from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
# socketio = SocketIO(app,cors_allowed_origins="http://localhost") 


@app.route('/')
def root():
    return app.send_static_file('index.html')

# @socketio.on("msg")
# def handle_msg(data):
#     socketio.emit('push',data, broadcast=True, include_self = False)


if __name__ == '__main__':
   socketio.run(app)