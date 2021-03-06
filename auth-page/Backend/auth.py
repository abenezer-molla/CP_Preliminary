from flask_restx import Resource,Namespace,fields
from models import User
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import (JWTManager,
create_access_token,create_refresh_token,
get_jwt_identity,
jwt_required)
from flask import Flask,request,jsonify,make_response

auth_ns=Namespace('auth',description="A namespace for Authentication")

signup_model=auth_ns.model(
    'SignUp',
    {
        "username":fields.String(),
        "email":fields.String(),
        "password":fields.String()
    }
)

login_model=auth_ns.model(
    'Login',
    {
        'username':fields.String(),
        'password':fields.String()
    }
)

@auth_ns.route('/signup')
class SignUp(Resource):
    @auth_ns.expect(signup_model)
    def post(self):
        data=request.get_json()
        username=data.get('username')

        currentUser=User.query.filter_by(username=username).first()

        if currentUser is not None: # it means it has already been registered
            return jsonify({"message":f"User with username {username} already exists"})

        newUser=User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        ) # assigning the values from the UI input into the respective db values. 

        newUser.save()

        return make_response(jsonify({"message":"User created/registered successfuly"}),201)

@auth_ns.route('/login') # function for Login user
class Login(Resource):

    @auth_ns.expect(login_model)
    def post(self):
        data=request.get_json()

        username=data.get('username')
        password=data.get('password')

        currentUser=User.query.filter_by(username=username).first()

        if currentUser and check_password_hash(currentUser.password, password): # checking the password given with the one that is hashed ans stored! 
            access_token=create_access_token(identity=currentUser.username) # access will only be given once the password sotred and given matches
            refresh_token=create_refresh_token(identity=currentUser.username)

            return jsonify(
                {"access_token":access_token,"refresh_token":refresh_token} 
            )
        else:
            return jsonify({"message":"Invalid username and/or password"})


@auth_ns.route('/refresh') # used to generate refresh token
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        currentUser=get_jwt_identity()
        new_access_token=create_access_token(identity=currentUser)
        return make_response(jsonify({"access_token":new_access_token}),200)