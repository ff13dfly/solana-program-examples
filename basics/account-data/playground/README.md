# Playground

* This is a frontend to check the details of program ``, make it easy to understand.

* `npx create-react-app playground --template typescript`

## Frontend

* Add `react-bootstrap`, [React Bootstrap](https://react-bootstrap.netlify.app/)

* Add `config-overrides.js`, need to add 

    ```Bash
        yarn add crypto-browserify
        yarn add browserify-zlib
    ```

* Modify `package.json`

    ```Javascript
        //before
        {
            "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
            }
        }

        //after
        {
            "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "test": "react-app-rewired test",
                "eject": "react-scripts eject"
            }
        }
    ```