var React = require("react");

class Login extends React.Component {
    render() {
        console.log("Rendering Login In Page");
        return (
            <html lang="en" dir="ltr">
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Take a Note - Register</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <link rel="stylesheet" href="css/style.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </head>
            <body>
                <div className="row login-card">
                <div className="row">
                    <div className="col s12 m6 l4 offset-l4 offset-m3">
                        <div className="card hoverable z-depth-3">
                        <div className="card-action teal lighten-3">
                            <h3>Register</h3>
                        </div>
                            <div className="card-content" style={{background:"rgba(0,0,0,0.6)"}}>
                                <div className="row">
                                    <form method="POST" action="/register?_method=POST" className="col s12">
                                        <div style={{marginTop:"20px"}}>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">person</i>
                                            <input name="username" type="text" id="icon_prefix2" className="materialize-textarea"></input>
                                            <label for="icon_prefix2">User Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">lock_outline</i>
                                            <input name="password" type="text" id="icon_prefix2" className="materialize-textarea"></input>
                                            <label for="icon_prefix2">Password</label>
                                        </div>
                                        <div className="col s6 l6 offset-l3 offset-s3" style={{marginBottom:"20px", marginTop:"20px"}}>
                                            <button type="submit" className="btn-block waves-effect waves-light btn-large">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Login;
