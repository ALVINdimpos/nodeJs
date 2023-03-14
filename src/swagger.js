export const swaggerDefinition ={
  "swagger": "2.0",
  "info": {
    "title": "My Brand API",
    "description": "API description in Markdown.",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/api",
  "schemes": ["http"],
  "paths": {
    "/login": {
      "post": {
        "tags": ["User"],
        "summary": "Login with email and password",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "email",
            "in": "formData",
            "description": "Email of the user",
            "required": true,
            "type": "string"
          },
          {
            "name": "password",
            "in": "formData",
            "description": "Password of the user",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/signup": {
      "post": {
        "tags": ["User"],
        "summary": "Signup with email and password",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "email",
            "in": "formData",
            "description": "Email of the user",
            "required": true,
            "type": "string"
          },
          {
            "name": "password",
            "in": "formData",
            "description": "Password of the user",
            "required": true,
            "type": "string"
          },
          {
            "name": "confirmpassword",
            "in": "formData",
            "description": "confirmPassword of the user",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/users": {
      "get": {
        "tags": ["User"],
        "summary": "Get all users",
        "description": "",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
      
    },
    "/user/{id}": {
      "get": {
        "tags": ["User"],
        "summary": "Get a user by id",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the user",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref":""
            }
          }
        }
      }
     
    },
    "/user/update/{id}": {
      "put": {
        "tags": ["User"],
        "summary": "Update a user's email",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "token",
            "in": "header",
            "description": "Token of the user",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "description": "Id of the user",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    
    "/user/delete/{id}": {
      "delete": {
        "tags": [
          "User"
        ],
        "summary": "Delete user by ID",
        "description": "Deletes the user with the given ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "ID of the user to be deleted",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "User deleted successfully"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    },
    "/blog/create": {
      "post": {
        "tags": ["Blog"],
        "summary": "Create a new blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "title",
            "in": "formData",
            "description": "Title of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "content",
            "in": "formData",
            "description": "Content of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "author",
            "in": "formData",
            "description": "Author of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "image",
            "in": "formData",
            "description": "Image of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blogs": {
      "get": {
        "tags": ["Blog"],
        "summary": "Get all blog posts",
        "description": "",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/{id}": {
      "get": {
        "tags": ["Blog"],
        "summary": "Get a blog post by id",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/update/{id}": {
      "put": {
        "tags": ["Blog"],
        "summary": "Update a blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "title",
            "in": "formData",
            "description": "Title of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "content",
            "in": "formData",
            "description": "Content of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "author",
            "in": "formData",
            "description": "Author of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "image",
            "in": "formData",
            "description": "Image of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/delete/{id}": {
      "delete": {
        "tags": ["Blog"],
        "summary": "Delete a blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/create/{id}/comments": {
      "post": {
        "tags": ["Blog"],
        "summary": "Add a comment to a blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          },
          {
            "name": "commentBody",
            "in": "path",
            "description": "comment of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/{id}/comments/{id}": {
      "delete": {
        "tags": ["Blog"],
        "summary": "Delete a comment from a blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blog/{id}/comments": {
      "get": {
        "tags": ["Blog"],
        "summary": "get a comment from a blog post",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/queries":{
      "get":{
        "tags": ["Querries"],
        "summary": "Get all querries",
        "description": "",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/querry/create":{
      "post":{
        "tags": ["Querries"],
        "summary": "Get a querries",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "name",
            "in": "path",
            "description": "name of the Quest",
            "required": true,
            "type": "string"
          },
          {
            "name": "email",
            "in": "path",
            "description": "email of the quest",
            "required": true,
            "type": "string"
          },
          {
            "name": "message",
            "in": "path",
            "description": "message from the quest",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/queries/delete/{id}":{
      "delete":{
        "tags": ["Querries"],
        "summary": "Delete a querries",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    }
    }
  }