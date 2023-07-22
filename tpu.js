function login(r) {
    let headers = {
        "Content-Type": "application/json",
        "Authorization": r.variables.token
    };

    let response = r.subrequest("/_tpu_get_user", {
       headers: headers
    }, function(response) {
            r.error(response.oauthAppId === r.variables.tpu_app_id, response.oauthAppId, r.variables.tpu_app_id);
            if(response.username && response.oauthAppId === r.variables.tpu_app_id) {
                return 204;
            } else {
                return 500;
            }
   })
}

export default { login }
